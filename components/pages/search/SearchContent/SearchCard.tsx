import Image from "next/image";
import styled from "styled-components";

type SearchCardProps = {
  title: string;
  artist: string;
  image: string;
};

const Card = styled.div``;

const ImageWrapper = styled.figure`
  /* all: unset; */
  border: 0px;
  box-shadow: none;
  position: relative;
  border-radius: 0.5rem;
  margin: 0;
  height: 10rem;
  width: 10rem;
  background-color: red;
`;

const DisplayImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: fill;
  object-position: center;
`;

const Content = styled.div``;

const Title = styled.h3``;

const Artist = styled.span``;

export default function SearchCard({ image, title, artist }: SearchCardProps) {
  return (
    <Card>
      <ImageWrapper>
        <DisplayImage src={image} alt="" fill />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Content>
    </Card>
  );
}
