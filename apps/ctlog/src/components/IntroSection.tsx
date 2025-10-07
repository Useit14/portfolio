import type { HTMLAttributes } from "react";
import styled from "styled-components";
import backgroundWithArrow from "../../public/assets/h1-bg.png";
import { useTranslation } from "react-i18next";

interface HeaderWithArrowProps extends HTMLAttributes<HTMLDivElement> {
  $background: string;
}

const HeaderWithArrow = styled.div<HeaderWithArrowProps>((props) => ({
  background: `url(${props.$background}) no-repeat center bottom`,
  fontSize: "15px",
  textTransform: "uppercase",
  color: "#353535",
  letterSpacing: "1px",
  fontWeight: "bold",
}));

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="max-w-6xl md:w-[750px] pl-[15px] pr-[15px] ml-auto mr-auto">
        <div className="mb-12">
          <HeaderWithArrow $background={backgroundWithArrow}>
            <div className="text-[#39cbb5] text-[32px] pb-[30px]">
              {t("introSection1")}
            </div>
          </HeaderWithArrow>
          <div className="text-[#8c9398] text-[14px] leading-[25px] tracking-[1px] mt-[50px]">
            {t("introSection2")}{" "}
            <a
              href="img/kurs_po_godam.png"
              className="text-[#353535] hover:text-[#3dc9b3]"
            >
              {t("introSection3")}
            </a>{" "}
            {t("introSection4")}{" "}
            <a
              href="img/volume.png"
              className="text-[#353535] hover:text-[#3dc9b3]"
            >
              {t("introSection5")}
            </a>{" "}
            {t("introSection6")}
            <br />
            {t("introSection7")}
            <br />
            * * *
            <br />
            <br />
            {t("introSection8")}{" "}
            <a
              href="#responsive"
              className="text-[#353535] hover:text-[#3dc9b3]"
            >
              {t("introSection9")}
            </a>
            <br />
            {t("introSection10")}
            <br />
            {t("introSection11")}
            <br />
            {t("introSection12")}
            <br />
            {t("introSection13")}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
