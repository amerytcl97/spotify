import styled from "styled-components";
import PlayerActions from "./PlayerActions";
import PlayerController from "./PlayerController";
import PlayerInfo from "./PlayerInfo";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export default function Player() {
  return (
    <PlayerContainer>
      <PlayerInfo />
      <PlayerController />
      <PlayerActions />
    </PlayerContainer>
  );
}
