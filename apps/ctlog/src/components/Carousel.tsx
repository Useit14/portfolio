import { useEffect, useState } from "react";
import styled from "styled-components";

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px;
  animation: slide-in 0.5s ease-in-out;

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-10%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

interface DotProps {
  $active: boolean;
}

const Dot = styled.div<DotProps>((props) => ({
  width: "12px",
  height: "12px",
  border: "3px solid #c9cbca",
  borderRadius: props.$active ? "90px" : "20px",
  backgroundColor: props.$active ? "black" : "",
  clipPath: props.$active ? "circle(50% at center)" : "",
  cursor: props.$active ? "default" : "pointer",
}));

interface CarouselProps {
  slides: React.ReactNode[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startInterval = () => {
      if (!isHovered) {
        interval = setInterval(() => {
          setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        setIntervalId(interval);
      } else {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }
    };

    startInterval();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, slides]);

  return (
    <div
      className="flex flex-col w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col w-full">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            style={{
              display: index === currentSlideIndex ? "flex" : "none",
            }}
          >
            {slide}
          </Slide>
        ))}
      </div>
      <div className="flex justify-center w-full mt-[20px]">
        {slides.map((_, index) => (
          <div key={index} className="ml-[6px] mr-[6px]">
            <Dot
              $active={index === currentSlideIndex}
              onClick={() => setCurrentSlideIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
