import styled, { css } from "styled-components";
import Presentation from "../../icons/Presentation";
import Queue from "../../icons/Queue";
import Button from "../buttons/Button";
import TooltipButton from "../buttons/TooltipButton";
import Tooltip from "../Tooltip";
import VolumeControl from "../VolumeControl";

/**
 * Component that allows for volume control,
 * Connect to a device,
 * Queue,
 * Lyrics
 * */

const TypicalIconButtonStyle = css`
  fill: white;
  height: 1.2rem;
  width: 1.2rem;
`;

const PlayerActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;
  gap: 0.4rem;
`;

const PlayerActionsConnectButton = styled(TooltipButton)`
  ${TypicalIconButtonStyle}
`;

const PlayerActionQueueButton = styled(TooltipButton)`
  ${TypicalIconButtonStyle}
`;

export default function PlayerActions() {
  return (
    <PlayerActionsContainer>
      <PlayerActionQueueButton onClick={() => {}} title="Queue" placement="top">
        <Queue />
      </PlayerActionQueueButton>
      <PlayerActionsConnectButton
        onClick={() => {}}
        title="Connect to a device"
        placement="top"
      >
        <Presentation />
      </PlayerActionsConnectButton>
      <VolumeControl />
    </PlayerActionsContainer>
  );
}
