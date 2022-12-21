import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserPlaylists } from "../../../pages/api/spotify";

const Container = styled.div`
  /* display: flex; */
  border-top: 1px solid gray;
  width: 100%;
  padding-block: 1rem;
`;

const ListHeading = styled.h3``;

const List = styled.ul`
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ListItem = styled.li`
  color: lightslategray;
  font-size: 0.9rem;
  transition: color 0.3s;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export default function UserPlayList() {
  const { data: session } = useSession() || {};

  const [userPlaylist, setUserPlaylist] =
    useState<SpotifyApi.ListOfUsersPlaylistsResponse>();

  useEffect(() => {
    (async () => {
      if (session) {
        const data = await getUserPlaylists(session!);
        setUserPlaylist(data);
      }
    })();
  }, [session]);

  return (
    <Container>
      <List>
        {userPlaylist?.items.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
    </Container>
  );
}
