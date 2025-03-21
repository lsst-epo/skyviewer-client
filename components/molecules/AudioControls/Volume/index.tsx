"use client";
import clsx from "clsx";
import { FC } from "react";
import { useAudioPlayerContext } from "react-use-audio-player";
import {
  IoIosVolumeHigh,
  IoIosVolumeLow,
  IoIosVolumeMute,
  IoIosVolumeOff,
} from "react-icons/io";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import styles from "./styles.module.css";
import IconButton from "@/components/atomic/IconButton";
import { useTranslation } from "react-i18next";
import { useEventListener, useSessionStorage } from "usehooks-ts";
import { roundToStep } from "@/lib/utilities";

interface VolumeProps {
  className?: string;
}

const Volume: FC<VolumeProps> = ({ className }) => {
  const { t } = useTranslation();
  const { setVolume, toggleMute, unmute, mute, ...context } =
    useAudioPlayerContext();
  const [saved, setSaved] = useSessionStorage(
    "audioConfig",
    { volume: context.volume, isMuted: context.isMuted },
    { initializeWithValue: false }
  );

  const handleMuteToggle = () => {
    toggleMute();
    setSaved({ ...saved, isMuted: !saved.isMuted });
  };

  const changeMute = (shouldMute: boolean) => {
    if (shouldMute) {
      mute();
    } else {
      unmute();
    }

    setSaved({ ...saved, isMuted: shouldMute });
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
    setSaved({ ...saved, volume: newVolume });
  };

  useEventListener("keydown", (event) => {
    const { key } = event;
    if (key === "m") {
      event.preventDefault();
      handleMuteToggle();
    }

    if (key === "ArrowUp") {
      event.preventDefault();
      changeVolume(Math.min(1, roundToStep(saved.volume + 0.05, 0.05)));
    }

    if (key === "ArrowDown") {
      event.preventDefault();
      changeVolume(Math.max(0, roundToStep(saved.volume - 0.05, 0.05)));
    }
  });

  const handleChange = (value: number) => {
    if (saved.isMuted) {
      changeMute(false);
    }
    changeVolume(value);
  };

  const getVolumeIcon = () => {
    if (saved.isMuted) {
      return <IoIosVolumeOff />;
    } else {
      if (saved.volume === 0) return <IoIosVolumeOff />;

      if (saved.volume < 0.2) return <IoIosVolumeMute />;

      return saved.volume > 0.6 ? <IoIosVolumeHigh /> : <IoIosVolumeLow />;
    }
  };

  return (
    <div className={clsx(styles.volume, className)}>
      <HorizontalSlider
        styleAs="dark"
        className={styles.slider}
        min={0}
        max={1}
        step={0.01}
        value={saved.volume}
        onChangeCallback={handleChange}
      />
      <IconButton
        className={styles.mute}
        styleAs="secondary"
        icon={getVolumeIcon()}
        onClick={handleMuteToggle}
        text={t("controls.volume", {
          context: saved.isMuted ? "unmute" : "mute",
        })}
      />
    </div>
  );
};

export default Volume;

<svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8">
  <path
    id="Path_1162012"
    data-name="Path 1162012"
    d="M3,11.48V8.52A.511.511,0,0,1,3.5,8H5.293a.49.49,0,0,0,.353-.153l1.5-1.694A.5.5,0,0,1,8,6.521v6.957a.5.5,0,0,1-.858.363L5.647,12.157A.49.49,0,0,0,5.289,12H3.5A.511.511,0,0,1,3,11.48Z"
    transform="translate(-3 -6)"
    fill="#1f2121"
  />
</svg>;
