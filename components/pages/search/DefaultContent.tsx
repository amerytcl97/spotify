import styled from "styled-components";
import AvailableGenres from "./AvailableGenres/AvailableGenres";
import RecentSearch from "./RecentSearch/RecentSearch";

type DefaultContentProps = {
  genres: SpotifyApi.AvailableGenreSeedsResponse["genres"];
};

const Content = styled.div`
  margin-top: 1.5rem;
  animation: ${({ theme }) => theme["animation-fadein"]} 0.5s ease-in;
`;

export default function DefaultContent({ genres }: DefaultContentProps) {
  return (
    <Content>
      <RecentSearch />
      <AvailableGenres data={genres} />
    </Content>
  );
}
