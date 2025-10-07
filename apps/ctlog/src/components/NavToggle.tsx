import styled from "styled-components";
import type { HTMLAttributes } from "react";

interface ToggleButtonProps extends HTMLAttributes<HTMLDivElement> {
  $isOpen: boolean;
}

const ToggleButton = styled.div<ToggleButtonProps>((props) => ({
  cursor: "pointer",
  transition: "transform 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative" /* Добавляем позиционирование */,
  transform: props.$isOpen ? "rotate(90deg)" : "initial",

  span: {
    display: "block",
    width: "2rem",
    height: "0.25rem",
    backgroundColor: "black",
    marginTop: "0.4rem",
    borderRadius: "0.125rem",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    position: "relative" /* Позиционирование для смещения */,

    "&:nth-child(1)": {
      opacity: props.$isOpen ? 0 : 1,
    },

    "&:nth-child(2)": {
      transform: props.$isOpen ? "translateY(250%) rotate(-45deg)" : "initial",
      marginTop: props.$isOpen
        ? 0
        : "0.4rem" /* Убираем отступ для центрирования */,
    },

    "&:nth-child(3)": {
      transform: props.$isOpen ? "rotate(45deg)" : "initial",
    },
  },
}));

interface NavToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavToggle: React.FC<NavToggleProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="h-10 w-10 flex items-center justify-center">
      <ToggleButton onClick={toggleMenu} $isOpen={isOpen}>
        <span />
        <span />
        <span />
      </ToggleButton>
    </div>
  );
};

export default NavToggle;
