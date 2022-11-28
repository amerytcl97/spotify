import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export type ButtonProps = {
  className?: string;
  children: ReactElement | ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const ButtonContainer = styled.button`
  all: unset;
  display: inline-flex;
  place-items: center;
  white-space: nowrap;
  :hover {
    cursor: pointer;
  }
`;

export default function Button({
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <ButtonContainer
      type={type}
      onClick={() => onClick()}
      className={className}
    >
      {children}
    </ButtonContainer>
  );
}
