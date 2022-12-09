import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavouriteButton from "../Buttons/FavouriteButton";

type PlayerInfoProps = {
  title: string;
  author: string;
};

const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  gap: 1rem;
`;

const PlayerInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`;

const PlayerInfoTitle = styled(Link)`
  all: unset;
  font-size: 0.9rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PlayerInfoAuthor = styled(Link)`
  all: unset;
  font-size: 0.7rem;
  color: #cbd5e1;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PlayerInfoImageContainer = styled(Image)``;

export default function PlayerInfo() {
  return (
    <PlayerInfoContainer>
      <Image alt="" src="" width={64} height={64} />
      <PlayerInfoContent>
        <PlayerInfoTitle href="" role="title">
          Moonwalker
        </PlayerInfoTitle>
        <PlayerInfoAuthor href="" role="author">
          Fabvi
        </PlayerInfoAuthor>
      </PlayerInfoContent>
      <FavouriteButton onClick={() => {}} title="Save to your library" />
    </PlayerInfoContainer>
  );
}
