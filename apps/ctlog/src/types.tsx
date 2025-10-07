import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Item {
  href: string;
  text: string;
  callback?: () => void;
}

export interface Feature {
  icon?: {
    icon?: IconDefinition;
    styles?: string;
  };
  title: {
    title: string;
    styles?: string;
  };
  text: string;
  image?: ImgExpandProps;
  containerStyles?: string;
}

export interface ImgExpandProps {
  name: string;
  alt: string;
  detailName?: string;
  link?: string;
  withOverlay?: boolean;
}
