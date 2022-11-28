import {
  Infinite,
  PlayCircle,
  PlaySkipBack,
  PlaySkipForward,
  Shuffle,
} from "@styled-icons/ionicons-sharp";
import { useState } from "react";
import styled, { css } from "styled-components";
import TooltipButton from "../buttons/TooltipButton";
import Slider from "../Slider";

const TypicalIconButtonStyle = css`
  height: 1.5rem;
  width: 1.5rem;
`;

const PlayButton = styled(TooltipButton)`
  height: 2.5rem;
  width: 2.5rem;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;

const SkipForwardButton = styled(TooltipButton)`
  ${TypicalIconButtonStyle}
`;

const SkipBackwardButton = styled(TooltipButton)`
  ${TypicalIconButtonStyle}
`;

const ShuffleButton = styled(TooltipButton)`
  ${TypicalIconButtonStyle}
`;

const LoopButton = styled(TooltipButton)`
  ${TypicalIconButtonStyle}
`;

const PlayerControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  gap: 0.5rem;
`;

const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 1rem;
`;

const SeekBar = styled(Slider)`
  width: 50%;
  max-width: 30rem;
  min-width: 20rem;
`;

export default function PlayerController() {
  const [play, setPlay] = useState<boolean>(false);
  const [loop, setLoop] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);

  return (
    <PlayerControllerContainer>
      <ActionButtonsWrapper>
        <ShuffleButton title="Shuffle" onClick={() => {}}>
          <Shuffle />
        </ShuffleButton>
        <SkipBackwardButton title="Previous" onClick={() => {}}>
          <PlaySkipBack />
        </SkipBackwardButton>
        <PlayButton title="Play" onClick={() => {}}>
          <PlayCircle />
        </PlayButton>
        <SkipForwardButton title="Next" onClick={() => {}}>
          <PlaySkipForward />
        </SkipForwardButton>
        <LoopButton title="Loop" onClick={() => {}}>
          <Infinite />
        </LoopButton>
      </ActionButtonsWrapper>
      <SeekBar min={0} max={100} onChange={() => {}} />
    </PlayerControllerContainer>
  );
}
