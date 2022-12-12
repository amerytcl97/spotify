import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

type ShowMoreButton = {
  href: string;
  className?: string;
};

const Button = styled(LinkButton)`
  border: 0.13rem solid #cbd5e1;
  padding-block: 0.6rem;
  padding-inline: 1rem;
  margin: 0;
  border-radius: ${({ theme }) => theme.fullrounded};
  font-size: 0.8rem;
  color: #cbd5e1;
`;

export default function ShowMoreButton({ href, className }: ShowMoreButton) {
  return (
    <Button href={href} className={className}>
      Show more
    </Button>
  );
}
