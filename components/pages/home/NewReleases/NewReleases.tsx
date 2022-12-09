import styled from "styled-components";
import { Playlist } from "../../../../interfaces/spotify";
import Button from "../../../Buttons/Button";
import ShowMoreButton from "../../../Buttons/ShowMoreButton";
import Title from "../../../Title";
import NewReleaseCard from "./NewReleaseCard";

type NewReleasesProps = {
  data: Playlist[];
};

const Container = styled.section`
  /* overflow: visible; */
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  flex-direction: row;
  gap: 1.1rem;
  overflow: hidden;
  padding-block: 0.3rem;
  padding-inline: 0;
  height: 20rem;
  width: 100%;
  z-index: 0;

  /* width */
  ::-webkit-scrollbar {
    height: 0px !important;
  }
`;

const ListItem = styled.li``;

const SectionHeader = styled.header`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function NewReleases({ data: newReleases }: NewReleasesProps) {
  console.log("Check newReleases", newReleases);

  return (
    <Container>
      <SectionHeader>
        <Title text="New Releases" />
        <ShowMoreButton href="" />
      </SectionHeader>
      <List>
        {newReleases.map((newRelease) => (
          <li key={newRelease.id}>
            <NewReleaseCard
              name={newRelease.name}
              images={newRelease.images}
              tracks={newRelease.total_tracks}
              releaseDate={newRelease.release_date}
            />
          </li>
        ))}
      </List>
    </Container>
  );
}
