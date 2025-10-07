import styled from "styled-components";
import type { Item } from "../types";
import { devices } from "../const";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  $isOpen: boolean;
}

const Container = styled.div<ContainerProps>((props) => ({
  display: props.$isOpen ? "flex" : "none",
  flexDirection: "column",
  backgroundColor: "#242830",
  fontFamily: "Verdana sans-serif",
  "@media only screen and ${devices.md}": {
    display: "block",
    flexDirection: "column",
    padding: "1.5rem",
    width: "100%",
  },
}));

const NavContainer = styled.div(() => ({
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  transition: "all 0.3s ease",
}));

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media only screen and ${devices.md} {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s ease;
  &:last-child {
    border: none;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: all 0.5s ease;
  position: relative;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;

    FontAwesomeIcon {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

interface NavigationProps {
  isOpen: boolean;
  items: Item[];
}

const Navigation = ({ isOpen, items }: NavigationProps) => {
  return (
    <Container $isOpen={isOpen} className="animated fadeInDown delay-05s">
      <NavContainer className="md:w-8/12 md:mx-auto sm:w-8/12 sm:mx-auto w-8/12 mx-auto">
        <NavList>
          {items.map((item, index) => (
            <NavItem key={index}>
              <NavLink
                href={item.href}
                onClick={() => item.callback && item.callback()}
              >
                <div className="flex">{item.text}</div>
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </Container>
  );
};

export default Navigation;
