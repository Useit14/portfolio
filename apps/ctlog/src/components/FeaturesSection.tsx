import {
  faCheckSquare,
  faMoneyBill,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FeaturesCards } from "./FeaturesCards";
import type { Feature } from "../types";
import { useTranslation } from "react-i18next";

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: {
        icon: faTruck,
        styles:
          "bg-[#3dc9b3] text-white text-[55px] ml-auto mr-auto mb-[50px] h-[175px] w-[175px] leading-[175px]",
      },
      title: {
        title: `${t("featuresSection1")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("featuresSection2")}
  <br/> ${t("featuresSection3")}`,
      containerStyles: "animated fadeInUp",
    },
    {
      icon: {
        icon: faCheckSquare,
        styles:
          "bg-[#3dc9b3] text-white text-[55px] ml-auto mr-auto mb-[50px] h-[175px] w-[175px] leading-[175px]",
      },
      title: {
        title: `${t("featuresSection4")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("featuresSection5")}
  ${t(
    "featuresSection6"
  )} <a href="#portfolio" class="text-[#353535] hover:text-[#3dc9b3]">${t(
        "featuresSection7"
      )}</a> ${t("featuresSection8")}
  ${t("featuresSection9")}`,
      containerStyles: "animated fadeInUp",
    },
    {
      icon: {
        icon: faMoneyBill,
        styles:
          "bg-[#3dc9b3] text-white text-[55px] ml-auto mr-auto mb-[50px] h-[175px] w-[175px] leading-[175px]",
      },
      title: {
        title: `${t("featuresSection10")}`,
        styles: "mt-[14px] text-[#353535] text-[14px] uppercase font-bold",
      },
      text: `${t("featuresSection11")} <br/>
  ${t("featuresSection12")}`,
      containerStyles: "animated fadeInUp",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <FeaturesCards
        header={{
          header: `${t("featuresSection13")}`,
          styles: "text-[#39cbb5] text-[32px] pb-[30px]",
        }}
        features={features}
      />
    </div>
  );
};
