import { useRouter } from "next/router";
import DefaultContent from "./DefaultContent";

type SwitchComponentProps = {
  genres: SpotifyApi.AvailableGenreSeedsResponse["genres"];
  searchResults: {
    isDataExists: boolean;
    artists: SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull> | undefined;
    tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull> | undefined;
  };
};

export default function SwitchComponent({
  genres,
  searchResults,
}: SwitchComponentProps) {
  switch (searchResults.isDataExists) {
    case true:
      return <></>;

    default:
      return <DefaultContent genres={genres} />;
  }
}
