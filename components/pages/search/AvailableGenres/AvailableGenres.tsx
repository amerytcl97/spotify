import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  generateRandomGradient,
  generateRandomHexColors,
} from "../../../../utils/functions";
import Title from "../../../Title";
import AvailableGenresCard from "./AvailableGenresCard";

type AvailableGenresProps = {
  data: SpotifyApi.AvailableGenreSeedsResponse["genres"];
};

const Container = styled.section``;

const Content = styled.div``;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 0.5rem;
  padding-bottom: 2rem;
`;

const ListItem = styled.li`
  height: fit-content;
  width: fit-content;
`;

export default function AvailableGenres({
  data: availableGenres = [],
}: AvailableGenresProps) {
  const [genres, setGenres] = useState<string[]>([]);
  useEffect(() => {
    setGenres(availableGenres);
  }, [availableGenres]);
  return (
    <section>
      <Title text="Available Genres" />
      <List>
        {genres.map((genre, index) => (
          <ListItem key={index}>
            <AvailableGenresCard title={genre} />
          </ListItem>
        ))}
      </List>
    </section>
  );
}
