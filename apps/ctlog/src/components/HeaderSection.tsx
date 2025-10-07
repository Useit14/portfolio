import { useState } from "react";
import backgroundImage from "../../public/assets/hero-bg.jpg";
import styled from "styled-components";
import type { Item } from "../types";
import Navigation from "./Navigation";
import NavToggle from "./NavToggle";
import { useTranslation } from "react-i18next";
import { appActions } from "../redux/slices/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "../redux/slices/app/selectors/getLanguage";

const Hero = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  height: auto;
  padding: 65px 0 300px 0;
`;

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguge = useSelector(getLanguage);
  const dispatch = useDispatch();

  const changeLanguage = () => {
    if (currentLanguge == "en") {
      dispatch(appActions.saveLanguage("ru"));
      i18n.changeLanguage("ru");
    } else {
      dispatch(appActions.saveLanguage("en"));
      i18n.changeLanguage("en");
    }
  };

  const items: Item[] = [
    { href: "#intro", text: `${t("headerSection1")}` },
    { href: "#features", text: `${t("headerSection2")}` },
    { href: "#responsive", text: `${t("headerSection3")}` },
    { href: "#portfolio", text: `${t("headerSection4")}` },
    { href: "#team", text: `${t("headerSection5")}` },
    { href: "#contact", text: `${t("headerSection6")}` },
    {
      href: "#",
      text: `${t("headerSection7")}`,
      callback: changeLanguage,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="top">
      <Navigation isOpen={isOpen} items={items} />
      <Hero>
        <div className="flex flex-col justify-center items-end px-4">
          <NavToggle isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="flex flex-col">
          <div className="md:w-8/12 md:ml-auto md:mr-auto text-center w-full px-4 mt-44">
            <div className="animated bounceInDown text-[40px] leading-[1] tracking-[12px] m-2.5">
              {t("headerSection8")}
            </div>

            <div className="animated fadeInUp delay-05s mt-7 text-[30px] leading-[1.2] tracking-[1px] text-[#333333]">
              {t("headerSection9")}
              <br />
              {t("headerSection10")}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-[60px]">
            <a
              href="https://wa.me/+79219107794"
              className=" bg-teal-500  pt-5 pb-5 pl-10 pr-10 text-white text-2xl font-bold rounded-md shadow-md 
       transition duration-300 ease-in-out flex items-center justify-center text-center tracking-[1px] hover:bg-teal-400"
            >
              {t("headerSection11")} <br /> +79219107794
            </a>
          </div>
        </div>
      </Hero>
    </div>
  );
};
