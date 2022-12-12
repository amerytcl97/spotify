import styled from "styled-components";
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
`;

export default function AvailableGenres({ data = [] }: AvailableGenresProps) {
  console.log("Checking available genres", data);

  return (
    <Container>
      <Title text="Genres" />
      <List>
        {data.map((item, index) => (
          <li key={index}>
            <AvailableGenresCard title={item} />
          </li>
        ))}
      </List>
    </Container>
  );
}
