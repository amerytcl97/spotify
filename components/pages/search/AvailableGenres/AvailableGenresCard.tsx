import styled from "styled-components";

type AvailableGenresCardProps = {
  title: string;
};

const Card = styled.div``;

export default function AvailableGenresCard({
  title,
}: AvailableGenresCardProps) {
  return <Card>{title}</Card>;
}
