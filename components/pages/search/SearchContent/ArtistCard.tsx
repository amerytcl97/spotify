import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

type ArtistCardProps = {
  images: SpotifyApi.ImageObject[];
  name: string;
  type: string;
};

const Card = styled.div`
  transition: transform 0.3s;
  background-color: #0e1111;
  padding: 0.3rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.3rem);
  }
`;

const ImageWrapper = styled.figure`
  border: 0px;
  box-shadow: none;
  position: relative;
  border-radius: inherit;
  margin: 0;
  height: 9.5rem;
  width: 9.5rem;
`;

const DisplayImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: fill;
  object-position: center;
`;

const Content = styled.div`
  margin-top: 0.5rem;
  line-height: 1.3rem;
`;

const Name = styled.h5`
  margin: 0;
`;

const Type = styled.span`
  text-transform: capitalize;
  font-size: 0.7rem;
`;

export default function ArtistCard({ images, name, type }: ArtistCardProps) {
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
        <Name>{name}</Name>
        <Type>{type}</Type>
      </Content>
    </Card>
  );
}
