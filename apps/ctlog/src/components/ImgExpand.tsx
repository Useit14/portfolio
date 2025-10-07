import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ImgExpandProps } from "../types";

const Container = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const ImageWrapper = styled.img`
  object-fit: cover;
  draggable: false;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(100, 194, 158, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.3s ease;
  color: #fff;
`;

export const ImgExpand = ({
  name,
  alt,
  detailName,
  link,
  withOverlay,
}: ImgExpandProps) => {
  return (
    <Container>
      <ImageWrapper src={`/assets/${name}`} alt={alt} />
      {withOverlay && (
        <Overlay>
          <Button href={detailName ? `./assets/${detailName}` : link}>
            <FontAwesomeIcon icon={faSearch} className="mr-2 text-white" />
            СМОТРЕТЬ
          </Button>
        </Overlay>
      )}
    </Container>
  );
};
