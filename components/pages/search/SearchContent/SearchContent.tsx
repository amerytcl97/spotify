import { Refresh, RefreshCircle } from "@styled-icons/ionicons-sharp";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getSearches } from "../../../../pages/api/spotify";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";

type SearchContentProps = {
  query: string;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  animation: ${({ theme }) => theme["animation-fadein"]} 0.5s ease-in;
`;

const EmptyMessage = styled.p`
  display: block;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-top: 10rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const ArtistList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0;
  padding-left: 0;
`;

const TrackList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0;
  padding-left: 0;
`;

const ListHeading = styled.h3`
  margin-left: 0;
`;

const RefreshIcon = styled(Refresh)`
  height: 3rem;
  width: 3rem;
  display: block;
  text-align: center;
  margin-top: 10rem;
  animation: ${({ theme }) => theme["animation-spin"]} 1s linear infinite;
`;

export default function SearchContent({ query }: SearchContentProps) {
  const { data: session } = useSession();

  const [isSearching, setIsSearching] = useState<boolean>(false);

  const [artists, setArtists] =
    useState<SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull>>();
  const [tracks, setTracks] =
    useState<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>>();

  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(async () => {
        const { artists, tracks }: SpotifyApi.SearchResponse =
          await getSearches(session!, query);
        if (artists) {
          setArtists(artists);
        }
        if (tracks) {
          setTracks(tracks);
        }
        setIsSearching(false);
      }, 1500);
    }
    () => {
      clearTimeout(timerRef.current);
    };
  }, [query, session]);

  return (
    <Container>
      {artists?.items.length || tracks?.items.length ? (
        <Wrapper>
          <div>
            <ListHeading>Artists</ListHeading>
            <ArtistList>
              {artists?.items.map((artist) => (
                <li key={artist.id}>
                  <ArtistCard
                    name={artist.name}
                    type={artist.type}
                    images={artist.images}
                  />
                </li>
              ))}
            </ArtistList>
          </div>
          <div>
            <ListHeading>Songs</ListHeading>
            <TrackList>
              {tracks?.items.map((track) => (
                <li key={track.id}>
                  <TrackCard
                    title={track.name}
                    artist={track.artists[0].name}
                    images={track.album.images}
                    duration={track.duration_ms}
                  />
                </li>
              ))}
            </TrackList>
          </div>
        </Wrapper>
      ) : !isSearching ? (
        <EmptyMessage>Could not find any results</EmptyMessage>
      ) : (
        <RefreshIcon />
      )}
    </Container>
  );
}
