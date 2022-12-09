import styled from "styled-components";
import Button from "./Buttons/Button";
import Slider from "./Slider";
import {
  VolumeOff,
  VolumeMute,
  VolumeLow,
  VolumeMedium,
  VolumeHigh,
} from "@styled-icons/ionicons-sharp";
import Tooltip from "./Tooltip";
import { useState } from "react";

const VOLUME_OFF_THRESHOLD = 0;

const VOLUME_LOW_TRESHOLD = 20;

const VOLUME_MEDIUM_TRESHOLD = 50;

const VOLUME_HIGH_TRESHOLD = 80;

const VolumeButton = styled(Button)`
  padding: 0.2rem;
  & > * {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

const VolumeSlider = styled(Slider)``;

const VolumeControlContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function VolumeControl() {
  const [currentVolume, setVolume] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(false);

  const onVolumeIconChange = () => {
    if (muted) {
      return <VolumeMute />;
    }

    if (currentVolume <= VOLUME_LOW_TRESHOLD) {
      return <VolumeOff />;
    } else if (
      currentVolume <= VOLUME_LOW_TRESHOLD &&
      currentVolume > VOLUME_OFF_THRESHOLD
    ) {
      return <VolumeLow />;
    } else if (
      currentVolume >= VOLUME_LOW_TRESHOLD &&
      currentVolume <= VOLUME_MEDIUM_TRESHOLD
    ) {
      return <VolumeMedium />;
    } else if (currentVolume >= VOLUME_MEDIUM_TRESHOLD) {
      return <VolumeHigh />;
    }
  };

  const handleOnChange = (value: string) => {
    setVolume(parseInt(value));
  };

  const handleOnClick = () => {
    console.log("OnClick");
    setMuted((o) => !o);
  };

  return (
    <VolumeControlContainer>
      <Tooltip title="Mute" placement="top">
        <VolumeButton onClick={handleOnClick}>
          {onVolumeIconChange()}
        </VolumeButton>
      </Tooltip>
      <VolumeSlider min={0} max={100} onChange={handleOnChange} />
    </VolumeControlContainer>
  );
}
