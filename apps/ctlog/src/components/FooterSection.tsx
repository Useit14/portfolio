import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface TextProps {
  $color: string;
}

const Text = styled.div<TextProps>((props) => ({
  color: props.$color ? "#fff" : "#8c9398",
  wordSpacing: "1px",
  lineHeight: "25px",
  fontSize: "14px",
}));

export const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#242830] pt-[40px] pb-[30px]">
      <div className="flex flex-col gap-3.5 lg:flex-row lg:justify-between lg:ml-[30px] lg:mr-[30px]">
        <div className="flex justify-center gap-2 align-middle text-[#a1a9b0] leading-[25px]">
          <div>
            <a href="doc/request.doc" className="hover:text-[#3dc9b3]">
              {t("footerSection1")}
            </a>
          </div>
          <div>|</div>
          <div>
            <a href="vacancy.html" className="hover:text-[#3dc9b3]">
              {t("footerSection2")}
            </a>
          </div>
        </div>
        <Text $color={"#fff"} className="text-center">
          2022-2023.
        </Text>
      </div>
    </div>
  );
};
