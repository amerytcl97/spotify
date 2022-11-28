import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type LinkButtonProps = {
  className?: string;
  href: string;
  children: ReactElement | ReactNode;
};

const LinkButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

export default function LinkButton({
  className,
  href,
  children,
}: LinkButtonProps) {
  return (
    <LinkButtonContainer href={href} className={className}>
      {children}
    </LinkButtonContainer>
  );
}
