import styled from "styled-components";
import { Playlist } from "../../../../interfaces/spotify";
import Heading from "../../../Heading";
import NewReleaseCard from "./NewReleaseCard";

type NewReleasesProps = {
  data: Playlist[];
};

const Container = styled.section``;

const Content = styled.div``;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: hidden;
  width: 100%;
`;

const ListItem = styled.li``;

export default function NewReleases({ data: newReleases }: NewReleasesProps) {
  return (
    <Container>
      <Heading text="New Releases" />
      <Content>
        <List>
          {newReleases.map((newRelease) => (
            <li key={newRelease.id}>
              <NewReleaseCard
                name={newRelease.name}
                images={newRelease.images}
              />
            </li>
          ))}
        </List>
      </Content>
    </Container>
  );
}
