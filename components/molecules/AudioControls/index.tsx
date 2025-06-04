"use client";
import { FC } from "react";

import clsx from "clsx/lite";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useAudioPlayerContext } from "react-use-audio-player";
import SeekBar from "./SeekBar";
import Volume from "./Volume";
import IconButton from "@/components/atomic/IconButton";
import formatDuration from "@/lib/duration";
import styles from "./styles.module.css";

interface AudioControls {
  title: string;
  className?: string;
  defaultDuration?: number;
}

const AudioPlayer: FC<AudioControls> = ({
  className,
  title,
  defaultDuration = 0,
}) => {
  const { isPlaying, isReady, togglePlayPause, stop, duration } =
    useAudioPlayerContext();
  const durationToUse = duration > 0 ? duration : defaultDuration;

  return (
    <div className={clsx(styles.player, className)}>
      <div>{title}</div>
      <SeekBar className={styles.seek} {...{ defaultDuration }} />
      <div className={styles.durations}>
        <span className={styles.duration}>{formatDuration(0)}</span>
        <span className={styles.duration}>{formatDuration(durationToUse)}</span>
      </div>
      <div className={styles.controls}>
        <div className={styles.playing}>
          <IconButton
            styleAs="secondary"
            text={"Reset"}
            icon={<IconComposer className={styles.reset} icon="RotateLeft" />}
            onClick={stop}
            disabled={!isReady}
          />
          <IconButton
            styleAs="secondary"
            text={isPlaying ? "Pause" : "Play"}
            icon={
              isPlaying ? <IoMdPause /> : <IoMdPlay className={styles.play} />
            }
            onClick={togglePlayPause}
            disabled={!isReady}
          />
        </div>
        <Volume className={styles.volume} />
      </div>
    </div>
  );
};

AudioPlayer.displayName = "Molecule.AudioPlayer";

export default AudioPlayer;
