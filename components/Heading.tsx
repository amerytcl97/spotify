import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type HeadingProps = {
  className?: string;
  text: string;
};

const H3 = styled.h2``;

export default function Heading({ className, text }: HeadingProps) {
  return <H3 className={className}>{text}</H3>;
}
