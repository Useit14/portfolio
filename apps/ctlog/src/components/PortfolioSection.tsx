import styled from "styled-components";
import { Carousel } from "./Carousel";
import { FeaturesCards } from "./FeaturesCards";
import type { Feature } from "../types";
import { useTranslation } from "react-i18next";

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
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Slide1: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      title: {
        title: `${t("portfolioSection1")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("portfolioSection2")}`,
      image: {
        name: "portfolio-01.jpg",
        detailName: "smt.jpg",
        alt: "",
        withOverlay: true,
      },
    },
    {
      title: {
        title: `${t("portfolioSection3")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t(
        "portfolioSection4"
      )} <a href="img/CAD.jpg" class="text-[#353535] hover:text-[#3dc9b3]">${t(
        "portfolioSection5"
      )}</a> ${t(
        "portfolioSection6"
      )} <a href="img/KR_for_TAES.pdf" class="text-[#353535] hover:text-[#3dc9b3]">${t(
        "portfolioSection7"
      )}</a>${t("portfolioSection8")}`,
      image: {
        name: "portfolio-02.jpg",
        detailName: "turbina.jpg",
        alt: "",
        withOverlay: true,
      },
    },
    {
      title: {
        title: `${t("portfolioSection9")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("portfolioSection10")}`,
      image: {
        name: "portfolio-03.jpg",
        detailName: "port.jpg",
        alt: "",
        withOverlay: true,
      },
    },
  ];

  return (
    <Slide>
      <FeaturesCards features={features} />
    </Slide>
  );
};

const Slide2: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      title: {
        title: `${t("portfolioSection11")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("portfolioSection12")}`,
      image: {
        name: "portfolio-04.jpg",
        detailName: "intcrss.jpg",
        alt: "",
        withOverlay: true,
      },
    },
    {
      title: {
        title: `${t("portfolioSection13")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("portfolioSection14")}`,
      image: {
        name: "portfolio-05.jpg",
        link: "http://www.ati.su/",
        alt: "",
        withOverlay: true,
      },
    },
    {
      title: {
        title: `${t("portfolioSection15")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("portfolioSection16")}`,
      image: {
        name: "portfolio-06.jpg",
        detailName: "alfastrah.jpg",
        alt: "",
        withOverlay: true,
      },
    },
  ];

  return <FeaturesCards features={features} />;
};

export const PortfolioSection: React.FC = () => {
  return (
    <>
      <Carousel slides={[<Slide1 />, <Slide2 />]} />
    </>
  );
};
