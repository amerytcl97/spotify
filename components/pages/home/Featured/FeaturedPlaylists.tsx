import styled from "styled-components";
import ShowMoreButton from "../../../Buttons/ShowMoreButton";
import Title from "../../../Title";

const Container = styled.section``;

const SubHeader = styled.header`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.div``;

export default function FeaturedPlaylists() {
  return (
    <section>
      <SubHeader>
        <Title text="Featured Playlists" />
        <ShowMoreButton href="" />
      </SubHeader>
      <Content></Content>
    </section>
  );
}
