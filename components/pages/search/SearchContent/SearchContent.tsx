import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getSearches } from "../../../../pages/api/spotify";
import SearchCard from "./SearchCard";

type SearchContentProps = {
  query: string;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  animation: ${({ theme }) => theme["animation-fadein"]} 0.5s ease-in;
`;

// const EmptyContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   place-content: center;
//   background-color: blue;
// `;

const EmptyMessage = styled.p`
  display: block;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-top: 10rem;
`;

export default function SearchContent({ query }: SearchContentProps) {
  const { data: session } = useSession();

  const [artists, setArtists] =
    useState<SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull>>();
  const [tracks, setTracks] =
    useState<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>>();

  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (query) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(async () => {
        const { artists, tracks }: SpotifyApi.SearchResponse =
          await getSearches(session!, query);
        console.log(artists, tracks);
        if (artists) {
          setArtists(artists);
        }
        if (tracks) {
          setTracks(tracks);
        }
      }, 1500);
    }
    () => {
      clearTimeout(timerRef.current);
    };
  }, [query, session]);

  return (
    <Container>
      {artists?.items.length || tracks?.items.length ? (
        <SearchCard title="Beat it" artist="Michael Jackson" image="" />
      ) : (
        <EmptyMessage>Could not find any results</EmptyMessage>
      )}
    </Container>
  );
}
