import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { convertMsToMinSec } from "../../../../utils/functions";

type SearchCardProps = {
  title: string;
  artist: string;
  images: SpotifyApi.ImageObject[];
  duration: number;
};

const Card = styled.div`
  animation: ${({ theme }) => theme["animation-fadein"]} 0.3s ease-in;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s;
  padding-inline: 0.7rem;
  padding-block: 0.6rem;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #0e1111;
  }
`;

const ImageWrapper = styled.figure`
  /* all: unset; */
  border: 0px;
  box-shadow: none;
  position: relative;
  border-radius: 0.5rem;
  margin: 0;
  height: 5rem;
  width: 5rem;
`;

const DisplayImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: fill;
  object-position: center;
`;

const Content = styled.div`
  line-height: 1.3rem;
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 0.8rem;
`;

const Artist = styled.span`
  font-size: 0.7rem;
  color: #9ca3af;
`;

const Duration = styled.span`
  font-size: 0.7rem;
  color: #9ca3af;
`;

export default function TrackCard({
  images,
  title,
  artist,
  duration,
}: SearchCardProps) {
  const [displayImage, setDisplayImage] = useState<SpotifyApi.ImageObject>();

  useEffect(() => {
    const getDisplayImage = () => {
      const image = images.find(
        (image, index) => (image.width && image.width >= 640) || index == 1
      );
      setDisplayImage(image);
    };
    getDisplayImage();
  }, [images]);

  return (
    <Card>
      <ImageWrapper>
        <DisplayImage src={displayImage?.url!} alt="" fill />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Content>
      <Duration>{convertMsToMinSec(duration)}</Duration>
    </Card>
  );
}
