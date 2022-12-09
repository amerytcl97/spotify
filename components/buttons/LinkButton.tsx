import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export type LinkButtonProps = {
  className?: string;
  href: string;
  children: ReactElement | ReactNode;
};

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  :hover {
    cursor: pointer;
  }
`;

export default function LinkButton({
  className,
  href,
  children,
}: LinkButtonProps) {
  return (
    <Button href={href} className={className}>
      {children}
    </Button>
  );
}
