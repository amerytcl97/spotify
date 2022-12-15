import styled from "styled-components";
import { generateRandomGradient } from "../../../../utils/functions";

type AvailableGenresCardProps = {
  title: string;
  className?: string;
};

const Card = styled.div<{ colors: string }>`
  display: flex;
  place-items: center;
  place-content: center;

  background: ${({ colors }) => colors};
  height: 10rem;
  width: 10rem;
  border-radius: 1rem;
  animation: ${({ theme }) => theme["animation-fadein-slidedown"]} 0.5s ease-in;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.3rem);
  }
`;

const GenreTitle = styled.h3`
  text-transform: capitalize;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export default function AvailableGenresCard({
  title,
  className,
}: AvailableGenresCardProps) {
  return (
    <Card className={className} colors={generateRandomGradient()}>
      <GenreTitle>{title}</GenreTitle>
    </Card>
  );
}
