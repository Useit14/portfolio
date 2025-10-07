import {
  faEnvelope,
  faPhone,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialBtn = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  background: #242830;
  display: inline-block;
  color: #fff;
  font-size: 17px;
  line-height: 40px;
  text-align: center;
`;

const SocialButtons = () => {
  return (
    <div className="flex justify-center gap-[10px]">
      <div>
        <SocialBtn href="tel:+79219107794" className="social-btn">
          <FontAwesomeIcon icon={faPhone} />
        </SocialBtn>
      </div>
      <div>
        <SocialBtn href="skype:ctlog.ru" className="social-btn">
          <FontAwesomeIcon icon={faTeletype} />
          <i className="fa fa-skype"></i>
        </SocialBtn>
      </div>
      <div>
        <SocialBtn href="mailto:mail@ctlog.ru" className="social-btn">
          <FontAwesomeIcon icon={faEnvelope} />
        </SocialBtn>
      </div>
    </div>
  );
};

export default SocialButtons;
