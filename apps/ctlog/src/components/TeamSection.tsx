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
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Slide1: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      title: {
        title: `${t("teamSection1")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("teamSection2")}<br>${t("teamSection3")}<br> ${t(
        "teamSection4"
      )}`,
      image: {
        name: "team-01.png",
        alt: "",
      },
    },
    {
      title: {
        title: `${t("teamSection5")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("teamSection6")}<br> ${t("teamSection7")} <br/>${t(
        "teamSection8"
      )}<br/> ${t("teamSection9")} <br/> ${t("teamSection10")}`,
      image: {
        name: "team-02.png",
        alt: "",
      },
    },
    {
      title: {
        title: `${t("teamSection11")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("teamSection12")} <br> ${t("teamSection13")}`,
      image: {
        name: "team-03.png",
        alt: "",
      },
    },
  ];

  return (
    <Slide>
      <FeaturesCards
        header={{
          header: `${t("teamSection14")}`,
          styles: "text-[#353535] text-[15px] pb-[30px]",
        }}
        features={features}
      />
    </Slide>
  );
};

const Slide2: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      title: {
        title: `${t("teamSection15")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t(
        "teamSection16"
      )} <a href="img/CAD.jpg" class="text-[#353535] hover:text-[#3dc9b3]">${t(
        "teamSection17"
      )}</a> ${t("teamSection18")}`,
      image: {
        name: "team-04.png",
        alt: "",
      },
    },
    {
      title: {
        title: `${t("teamSection19")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("teamSection20")} <br>${t("teamSection21")}<br>${t(
        "teamSection22"
      )}`,
      image: {
        name: "team-05.png",
        alt: "",
      },
    },
    {
      title: {
        title: `${t("teamSection23")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("teamSection24")} <br>${t("teamSection25")}<br>${t(
        "teamSection26"
      )}`,
      image: {
        name: "team-06.png",
        alt: "",
      },
    },
  ];

  return (
    <FeaturesCards
      header={{
        header: `${t("teamSection27")}`,
        styles: "text-[#353535] text-[15px] pb-[30px]",
      }}
      features={features}
    />
  );
};

export const TeamSection: React.FC = () => {
  return (
    <>
      <Carousel slides={[<Slide1 />, <Slide2 />]} />
    </>
  );
};
