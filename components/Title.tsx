import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type HeadingProps = {
  className?: string;
  text: string;
};

const H3 = styled.h2`
  margin: 0;
`;

export default function Title({ className, text }: HeadingProps) {
  return <H3 className={className}>{text}</H3>;
}
