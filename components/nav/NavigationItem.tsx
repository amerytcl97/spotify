import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type NavigationItem = {
  icon: ReactElement | ReactNode;
  name: string;
  url: string;
};

const IconWrapper = styled.div`
  height: 1.5rem;
  width: 1.5rem;
`;

const Title = styled.h3`
  all: unset;
  font-size: 0.9rem;
  font-weight: 600;
`;

const NavigationItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  place-items: center;
  gap: 1rem;
  width: 100%;
  color: lightslategray;
  transition: color 0.5s;
  :hover {
    color: white;
  }
`;

export default function NavigationItem({ icon, name, url }: NavigationItem) {
  return (
    <NavigationItemContainer href={url} role="item">
      <IconWrapper>{icon}</IconWrapper>
      <Title>{name}</Title>
    </NavigationItemContainer>
  );
}
