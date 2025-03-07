"use client";
import { FC } from "react";
import clsx from "clsx";
import formatDuration from "@/lib/duration";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { useAudioPlayerContext } from "react-use-audio-player";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import IconButton from "@/components/primitives/IconButton";
import SeekBar from "./SeekBar";
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
      <div className={styles.footer}>
        <span className={styles.duration}>{formatDuration(0)}</span>
        <div className={styles.controls}>
          <IconButton
            className={styles.audioControl}
            text={"Reset"}
            icon={<IconComposer className={styles.reset} icon="RotateLeft" />}
            onClick={stop}
            disabled={!isReady}
          />
          <IconButton
            className={styles.audioControl}
            text={isPlaying ? "Pause" : "Play"}
            icon={
              isPlaying ? <IoMdPause /> : <IoMdPlay className={styles.play} />
            }
            onClick={togglePlayPause}
            disabled={!isReady}
          />
        </div>
        <span className={styles.duration}>{formatDuration(durationToUse)}</span>
      </div>
    </div>
  );
};

AudioPlayer.displayName = "Molecule.AudioPlayer";

export default AudioPlayer;
