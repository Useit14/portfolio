import styled from "styled-components";
import backgroundKeyboard from "../../public/assets/keyboard-bg.jpg"; // импортируем изображение
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: center;
  background: url(${backgroundKeyboard}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  padding: 120px 0 140px;
`;

const SubscribeInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: solid 1px #fff;
  padding: 20px;
  width: 90%;
  color: #fff;
`;

const SubscribeBtn = styled.button`
  background: rgba(61, 201, 179, 0.5);
  border: solid 1px rgba(61, 201, 179, 0.5);
  padding: 20px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background: rgba(61, 201, 179, 1);
    border: solid 1px rgba(61, 201, 179, 1);
    color: #fff;
  }
`;

export const SubscribeSection = () => {
  const [text, setText] = useState("");
  const { t } = useTranslation();

  const subscribe = () => {};

  return (
    <SubscribeContainer>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-white  text-[28px]">
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <div className="text-[15px] uppercase font-bold mt-[20px] tracking-[1px]">
            {t("subscribeSection1")} <br />
            {t("subscribeSection2")}
          </div>
        </div>
        <div className="flex gap-1 justify-center mt-[40px]">
          <div>
            <SubscribeInput
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <SubscribeBtn onClick={subscribe}>
              {t("subscribeSection3")}
            </SubscribeBtn>
          </div>
        </div>
      </div>
    </SubscribeContainer>
  );
};
