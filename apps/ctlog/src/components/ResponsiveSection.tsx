import backgroundWithArrow from "../../public/assets/h1-bg.png";
import backgroundIphone from "../../public/assets/iphone-bg.png";
import styled from "styled-components";
import type { HTMLAttributes } from "react";
import { Carousel } from "./Carousel";
import { useTranslation } from "react-i18next";

const HeaderWithArrow = styled.div<HeaderWithArrowProps>((props) => ({
  background: `url(${props.$background}) no-repeat center bottom`,
  fontSize: "15px",
  textTransform: "uppercase",
  color: "#353535",
  letterSpacing: "1px",
  fontWeight: "bold",
}));

interface HeaderWithArrowProps extends HTMLAttributes<HTMLDivElement> {
  $background: string;
}

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px;
  animation: slide-in 0.5s ease-in-out;

  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Wp3 = styled.div`
  background: url(${backgroundIphone}) no-repeat center center;
  background-position: -3% 60%;
  background-color: #f0f0f0;
  width: 100%;
`;

const Slide1: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Slide>
      <HeaderWithArrow $background={backgroundWithArrow}>
        <div className="text-[15px] pb-[30px]">{t("responsiveSection1")}</div>
      </HeaderWithArrow>
      <div className="text-[#8c9398] text-[14px] leading-[25px] tracking-[1px] mt-[50px] text-center">
        <div>
          {t("responsiveSection2")} <br />
          {t("responsiveSection3")}{" "}
          <a
            href="mailto:mail@ctlog.ru"
            className="text-[#353535] hover:text-[#3dc9b3]"
          >
            {t("responsiveSection4")}
          </a>
        </div>
      </div>
    </Slide>
  );
};

const Slide2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Slide>
      <HeaderWithArrow $background={backgroundWithArrow}>
        <div className="text-[15px] pb-[30px]">{t("responsiveSection5")}</div>
      </HeaderWithArrow>
      <div className="text-[#8c9398] text-[14px] leading-[25px] tracking-[1px] mt-[50px] text-center">
        <div>
          {t("responsiveSection6")}{" "}
          <a
            href="mailto:mail@ctlog.ru"
            className="text-[#353535] hover:text-[#3dc9b3]"
          >
            {t("responsiveSection7")}{" "}
          </a>
          {t("responsiveSection8")}
        </div>
      </div>
    </Slide>
  );
};

export const ResponsiveSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Wp3 className="animated fadeInDown lg:flex"></Wp3>
      <div className="flex w-full lg:pl-[15px] lg:pr-[15px] lg:pt-[70px] lg:pb-[70px]">
        <Carousel slides={[<Slide1 />, <Slide2 />]} />
      </div>
    </div>
  );
};
