import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TopA = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  background: rgba(61, 201, 179, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  font-size: 18px;
  line-height: 46px;
  text-align: center;
  position: absolute;
  top: -26px;
  left: 0;
  right: 0;
`;

const TopBtn = () => {
  return (
    <>
      <TopA href="#top">
        <FontAwesomeIcon icon={faChevronUp} />
      </TopA>
    </>
  );
};

export default TopBtn;
