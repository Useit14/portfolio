import styled from "styled-components";
import { FeatureCard } from "./FeatureCard";
import type { HTMLAttributes } from "react";
import backgroundWithArrow from "../../public/assets/h1-bg.png";
import type { Feature } from "../types";

interface HeaderWithArrowProps extends HTMLAttributes<HTMLDivElement> {
  $background: string;
}

const HeaderWithArrow = styled.div<HeaderWithArrowProps>((props) => ({
  background: `url(${props.$background}) no-repeat center bottom`,
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontWeight: "bold",
}));

interface FeaturesCardsProps {
  features: Feature[];
  header?: {
    header: string;
    styles?: string;
  };
}

export const FeaturesCards = ({ features, header }: FeaturesCardsProps) => {
  return (
    <div className="flex flex-col max-w-6xl text-center">
      {header && (
        <HeaderWithArrow
          className={header.styles}
          $background={backgroundWithArrow}
        >
          {header.header}
        </HeaderWithArrow>
      )}
      <div className="mt-[50px] ml-[30px] mr-[30px] lg:flex lg:gap-2">
        {features.map((f, index) => {
          return (
            <FeatureCard
              key={index}
              icon={f.icon}
              title={f.title}
              text={f.text}
              image={f.image}
              containerStyles={f.containerStyles}
            />
          );
        })}
      </div>
    </div>
  );
};
