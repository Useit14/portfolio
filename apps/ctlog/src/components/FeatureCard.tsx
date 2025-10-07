import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImgExpand } from "./ImgExpand";
import type { Feature } from "../types";

const Icon = styled.div`
  max-width: 100%;
  border-radius: 50%;
  display: block;
  text-align: center;
  vertical-align: middle;
  position: relative;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
}
`;

const Title = styled.div`
  text-transform: uppercase;

  &::after {
    content: " ";
    border: solid 2px #3dc9b3;
    display: block;
    width: 35px;
    margin: 25px auto;
  }
`;

export const FeatureCard = ({
  icon,
  title,
  text,
  image,
  containerStyles = "",
}: Feature) => {
  const sanitizeHTML = (html: string) => {
    return html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  };

  return (
    <div className={`flex flex-col w-full ${containerStyles}`}>
      {icon && icon.icon ? (
        <Icon className={icon.styles}>
          <FontAwesomeIcon icon={icon.icon} />
        </Icon>
      ) : (
        image && (
          <ImgExpand
            name={image.name}
            detailName={image.detailName}
            link={image.link}
            alt=""
            withOverlay={image.withOverlay}
          />
        )
      )}
      <Title className={title.styles}>{title.title}</Title>
      <div className="text-[#8c9398] text-[14px] leading-[25px] tracking-[1px] mt-[14px] mb-[14px]">
        <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(text) }}></div>
      </div>
    </div>
  );
};
