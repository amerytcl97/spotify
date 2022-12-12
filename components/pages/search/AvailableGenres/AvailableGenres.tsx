import styled from "styled-components";
import { generateRandomGradient } from "../../../../utils/functions";
import Title from "../../../Title";
import AvailableGenresCard from "./AvailableGenresCard";

type AvailableGenresProps = {
  data: string[];
};

const Container = styled.section``;

const Content = styled.div``;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap : 1rem;
`;

const ListItem = styled.li`
  background-color : ${generateRandomGradient()};

`

export default function AvailableGenres({ data : availableGenres = [] }: AvailableGenresProps) {

  return (
    <Container>
      <Title text="Available Genres" />
      <List>
        {availableGenres.map((availableGenre, index) => (
          <ListItem key={index}>
            <AvailableGenresCard title={availableGenre} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
