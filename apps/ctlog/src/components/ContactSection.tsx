import styled from "styled-components";
import TopBtn from "./TopBtn";
import type { HTMLAttributes } from "react";
import backgroundWithArrow from "../../public/assets/h1-bg.png";
import { FeatureCard } from "./FeatureCard";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SocialButtons from "./SocialButtons";
import { useTranslation } from "react-i18next";

const HeaderWithArrow = styled.div<HeaderWithArrowProps>((props) => ({
  background: `url(${props.$background}) no-repeat center bottom`,
  fontSize: "15px",
  textTransform: "uppercase",
  color: "#353535",
  letterSpacing: "1px",
  fontWeight: "bold",
}));

const FeatureCardWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 0px 0px #f0f2f4;
  -moz-box-shadow: 0px 3px 0px 0px #f0f2f4;
  box-shadow: 0px 3px 0px 0px #f0f2f4;
  padding: 20px 0;
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 3px 0px 0px #3dc9b3;
    -moz-box-shadow: 0px 3px 0px 0px #3dc9b3;
    box-shadow: 0px 3px 0px 0px #3dc9b3;
    transform: translate(0, -15px);
    -webkit-transform: translate(0, -15px);
    -ms-transform: translate(0, -15px);
  }
`;

interface HeaderWithArrowProps extends HTMLAttributes<HTMLDivElement> {
  $background: string;
}

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <TopBtn />
      <div className="text-center ">
        <HeaderWithArrow $background={backgroundWithArrow}>
          <div className="pb-[30px]">{t("contactSection1")}</div>
        </HeaderWithArrow>
      </div>
      <div className="flex flex-col justify-center max-w-6xl ml-[30px] mr-[30px] text-center mt-[70px] gap-[30px] w-[-webkit-fill-available] lg:flex-row">
        <FeatureCardWrapper>
          <FeatureCard
            icon={{
              icon: faMapMarkerAlt,
              styles: "text-[20px] bg-inherit text-black ml-auto mr-auto",
            }}
            title={{
              title: `${t("contactSection2")}`,
              styles: "text-[#39cbb5] mt-[15px]",
            }}
            text={`${t("contactSection3")}<br> 
                      ${t("contactSection4")}
                     <br/> <br/> 
                      ${t("contactSection5")}<br>
                      ${t("contactSection6")}<br/>
                      ${t("contactSection7")}<br/>`}
          />
        </FeatureCardWrapper>
        <FeatureCardWrapper>
          <FeatureCard
            icon={{
              icon: faMobileAlt,
              styles: "text-[20px] bg-inherit text-black ml-auto mr-auto",
            }}
            title={{
              title: `${t("contactSection8")}`,
              styles: "text-[#39cbb5] mt-[15px]",
            }}
            text={`<a href="tel:+79219107794" class="text-[#353535] hover:text-[#3dc9b3]">+7 921 9107794</a>`}
          />
        </FeatureCardWrapper>
        <FeatureCardWrapper>
          <FeatureCard
            icon={{
              icon: faPaperPlane,
              styles: "text-[20px] bg-inherit text-black ml-auto mr-auto",
            }}
            title={{
              title: `${t("contactSection9")}`,
              styles: "text-[#39cbb5] mt-[15px]",
            }}
            text={`<a href="mailto:mail@ctlog.ru" class="text-[#353535] hover:text-[#3dc9b3]">mail@ctlog.ru</a>`}
          />
        </FeatureCardWrapper>
      </div>
      <div className="mt-[70px]">
        <SocialButtons />
      </div>
    </div>
  );
};

export default ContactSection;
