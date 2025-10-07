import styled from "styled-components";
import { devices } from "../const";
import backgroundPlants from "../../public/assets/plants-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Swag = styled.div`
  background: url(${backgroundPlants}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  padding: 50px 15px;
  text-align: center;

  @media screen and ${devices.lg} {
    .swag {
      background-attachment: scroll;
    }
  }
`;

const DownArrowBtn = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  background: rgba(61, 201, 179, 0.8);
  display: inline-block;
  margin: 10px auto 20px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
`;

export const SwagSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <Swag className="flex flex-col justify-center">
        <div className="text-black text-[40px] uppercase tracking-[5px]">
          {t("swagSection1")} <br /> {t("swagSection2")}
          <br />
          <span className="text-[25px] mt-[20px] block">
            {t("swagSection3")}
            <br /> {t("swagSection4")} <br />
            <a
              href="#portfolio"
              className="text-[#353535] hover:text-[#3dc9b3]"
            >
              {t("swagSection5")}
            </a>
          </span>
        </div>
        <DownArrowBtn href="#portfolio">
          <FontAwesomeIcon icon={faChevronDown} className="text-white" />
        </DownArrowBtn>
      </Swag>
    </>
  );
};
