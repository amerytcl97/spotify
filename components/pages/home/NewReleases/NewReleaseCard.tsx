import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { PlaylistImage } from "../../../../interfaces/spotify";
import OpenSpotifyButton from "../../../Buttons/OpenSpotifyButton";

type NewReleaseCardProps = {
  name: string;
  images: PlaylistImage[];
  tracks: number;
  releaseDate: string;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  transition: all 0.3s;
  height: 19.5rem;
  width: 15rem;
  background-color: #0e1111;
  padding: 0.3rem;

  :hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.figure`
  position: relative;
  border-radius: 0.5rem;
  margin: 0;
  height: 100%;
  width: 100%;
`;

const DisplayImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: fill;
  object-position: center;
`;

const Name = styled.h3`
  font-size: 1rem;
  flex: 1;
  margin-block: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const NumberOfTracks = styled.span`
  color: #d6d3d1;
  font-weight: bold;
  font-size: 0.8rem;
  width: fit-content;
  border-radius: ${({ theme }) => theme.fullrounded};
`;

const SpotifyButton = styled(OpenSpotifyButton)`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-inline: 0.2rem;
  margin-top: 0.5rem;
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
`;

const PlaylistSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ReleaseDate = styled.span`
  border-radius: ${({ theme }) => theme.fullrounded};
  color: #d6d3d1;
  font-weight: bold;
  font-size: 0.8rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  font-size: 0.7rem;
  margin: 0;
  padding: 0;
`;

export default function NewReleaseCard({
  name,
  images,
  tracks,
  releaseDate,
}: NewReleaseCardProps) {
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
      {/* <SpotifyButton href="" title="Open Spotify" placement="bottom" /> */}
      <ImageWrapper>
        <DisplayImage
          src={displayImage?.url!}
          alt=""
          // height={displayImage?.height}
          // width={displayImage?.width}
          fill
        />
      </ImageWrapper>
      <Content>
        <SpotifyButton href="" title="Open Spotify" placement="top" />
        <PlaylistInfo>
          <PlaylistSubInfo>
            <NumberOfTracks>
              {tracks} {tracks > 1 ? "Tracks" : "Track"}
            </NumberOfTracks>
            <ReleaseDate>{releaseDate}</ReleaseDate>
          </PlaylistSubInfo>
          <Name>{name}</Name>
        </PlaylistInfo>
      </Content>
    </Card>
  );
}
