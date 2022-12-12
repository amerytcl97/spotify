import styled from "styled-components";
import { generateRandomGradient } from "../../../../utils/functions";

type AvailableGenresCardProps = {
  title: string;
};

const Card = styled.div`
  /* background-color : ${generateRandomGradient()}; */
  height : 3rem;
  width : 3rem;
  display : block;
  padding : auto;
`;

export default function AvailableGenresCard({
  title,
}: AvailableGenresCardProps) {
  return <Card>{title}</Card>;
}
