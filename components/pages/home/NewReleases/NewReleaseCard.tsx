import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PlaylistImage } from "../../../../interfaces/spotify";

type NewReleaseCardProps = {
  name: string;
  images: PlaylistImage[];
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.5rem;
  transition: all 0.3s;
  height: 18rem;
  width: 16rem;
  :hover {
    cursor: pointer;
    transform: translateY(-0.5rem);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    /* margin-inline: 1rem; */
  }
`;

const ImageWrapper = styled.figure`
  height: inherit;
  width: inherit;
  border-radius: inherit;
`;

const DisplayImage = styled(Image)`
  border-radius: inherit;
`;

const Name = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1.1rem;
  margin-left: 0.5rem;
  word-wrap: break-word;
`;

export default function NewReleaseCard({ name, images }: NewReleaseCardProps) {
  const [displayImage, setDisplayImage] = useState<PlaylistImage>();

  useEffect(() => {
    const getDisplayImage = () => {
      const image = images.find(
        (image, index) => image.width >= 640 || index == 1
      );
      setDisplayImage(image);
    };
    getDisplayImage();
  }, [images]);

  return (
    <Card>
      <ImageWrapper>
        <DisplayImage
          src={displayImage?.url!}
          alt=""
          // height={displayImage?.height}
          // width={displayImage?.width}
          fill
        />
      </ImageWrapper>
      <Name>{name}</Name>
    </Card>
  );
}
