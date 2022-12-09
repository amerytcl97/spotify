import {
  Infinite,
  PauseCircle,
  PlayCircle,
  PlaySkipBack,
  PlaySkipForward,
  Shuffle,
} from "@styled-icons/ionicons-sharp";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  LOCAL_STORAGE_USER_REPEAT,
  LOCAL_STORAGE_USER_SHUFFLE,
} from "../../utils/variables";
import TooltipButton from "../Buttons/TooltipButton";
import Slider from "../Slider";

const TypicalIconButtonStyle = css`
  height: 1.5rem;
  width: 1.5rem;
  color: white;
`;

const PlayButton = styled(TooltipButton)`
  transition: all 0.2s;
  & > svg {
    height: 2.5rem;
    width: 2.5rem;
  }
  :hover {
    transform: scale(1.1);
  }
`;

const SkipForwardButton = styled(TooltipButton)`
  & > svg {
    ${TypicalIconButtonStyle}
  }
`;

const SkipBackwardButton = styled(TooltipButton)`
  & > svg {
    ${TypicalIconButtonStyle}
  }
`;

const ShuffleButton = styled(TooltipButton)`
  & > svg {
    ${TypicalIconButtonStyle}
  }
`;

const LoopButton = styled(TooltipButton)`
  & > svg {
    ${TypicalIconButtonStyle}
  }
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
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);

  const repeat = () => {
    localStorage.setItem(LOCAL_STORAGE_USER_REPEAT, "true");
    setIsRepeat(true);
  };

  const shuffle = () => {
    isShuffle
      ? localStorage.setItem(LOCAL_STORAGE_USER_SHUFFLE, "false")
      : localStorage.setItem(LOCAL_STORAGE_USER_SHUFFLE, "true");
    setIsShuffle((o) => !o);
  };

  const play = () => {
    setIsPlay((o) => !o);
  };

  useEffect(() => {
    const getUserLocalStorage = () => {
      const isUserRepeat =
        localStorage.getItem(LOCAL_STORAGE_USER_REPEAT) ?? "false";
      const isUserShuffle =
        localStorage.getItem(LOCAL_STORAGE_USER_SHUFFLE) ?? "false";
      setIsRepeat(JSON.parse(isUserRepeat.toLowerCase()));
      setIsShuffle(JSON.parse(isUserShuffle.toLowerCase()));
    };
    getUserLocalStorage();
  }, []);

  return (
    <PlayerControllerContainer>
      <ActionButtonsWrapper>
        <ShuffleButton
          title={isShuffle ? "Disable Shuffle" : "Enable Shuffle"}
          onClick={() => shuffle()}
        >
          <Shuffle />
        </ShuffleButton>
        <SkipBackwardButton title="Previous" onClick={() => {}}>
          <PlaySkipBack />
        </SkipBackwardButton>
        <PlayButton title={isPlay ? "Pause" : "Play"} onClick={() => play()}>
          {isPlay ? <PauseCircle /> : <PlayCircle />}
        </PlayButton>
        <SkipForwardButton title="Next" onClick={() => {}}>
          <PlaySkipForward />
        </SkipForwardButton>
        <LoopButton
          title={isRepeat ? "Disable Repeat" : "Enable Repeat"}
          onClick={() => repeat()}
        >
          <Infinite />
        </LoopButton>
      </ActionButtonsWrapper>
      <SeekBar min={0} max={100} onChange={() => {}} />
    </PlayerControllerContainer>
  );
}
