import styled from "styled-components";
import ShowMoreButton from "../../../Buttons/ShowMoreButton";
import Title from "../../../Title";

type TopArtistsProps = {
  data: [];
};

const Container = styled.section``;

const SectionHeader = styled.header``;

const Content = styled.div``;

export default function TopArtists({ data }: TopArtistsProps) {
  return (
    <Container>
      <SectionHeader>
        <Title text="Top Artists" />
        <ShowMoreButton href="" />
      </SectionHeader>
      <Content></Content>
    </Container>
  );
}
