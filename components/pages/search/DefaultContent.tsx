import styled from "styled-components";
import AvailableGenres from "./AvailableGenres/AvailableGenres";
import RecentSearch from "./RecentSearch/RecentSearch";

type DefaultContentProps = {
  genres: SpotifyApi.AvailableGenreSeedsResponse["genres"];
};

const Content = styled.div``;

export default function DefaultContent({ genres }: DefaultContentProps) {
  return (
    <Content>
      <RecentSearch />
      <AvailableGenres data={genres} />
    </Content>
  );
}
