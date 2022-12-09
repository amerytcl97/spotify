import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type SlideshowProps = {
  children: ReactNode | ReactElement;
};

const Container = styled.div``;

export default function Carousel({ children }: SlideshowProps) {
  return (
    <Container>
      <div></div>
    </Container>
  );
}
