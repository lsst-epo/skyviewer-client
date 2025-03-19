"use client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useAudioPlayerContext } from "react-use-audio-player";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import formatDuration from "@/lib/duration";
import { useKeyDownEvent } from "@/hooks/listeners";
import { roundToStep } from "@/lib/utilities";

interface SeekBarProps {
  className?: string;
  defaultDuration?: number;
}

const SeekBar: FC<SeekBarProps> = ({ className, defaultDuration = 0 }) => {
  const {
    getPosition,
    duration,
    isReady,
    isPlaying,
    pause,
    play,
    seek,
    togglePlayPause,
  } = useAudioPlayerContext();
  const [wasPlaying, setWasPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const frameRef = useRef<number>();

  const durationToUse = duration > 0 ? duration : defaultDuration;
  const step = 0.25;

  const togglePlay = useCallback(
    (event: KeyboardEvent) => {
      const toggleKeys = [" "];
      if (toggleKeys.includes(event.key)) {
        togglePlayPause();
      }
    },
    [togglePlayPause]
  );

  useKeyDownEvent(togglePlay);

  useEffect(() => {
    const animate = () => {
      const value = roundToStep((getPosition() / durationToUse) * 100, step);
      setPos(Math.min(100, value));
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const onBeforeChange = () => {
    if (isPlaying) {
      pause();
    }
    setWasPlaying(isPlaying);
  };

  const seekAudio = useCallback(
    (value: number | readonly number[]) => {
      if (typeof value === "number") {
        const position = (value / 100) * durationToUse;

        seek(position);
      }
    },
    [seek, durationToUse]
  );

  const onAfterChange = () => {
    if (wasPlaying) {
      play();
    }
  };

  return (
    <HorizontalSlider
      className={className}
      styleAs="dark"
      min={0}
      max={100}
      step={step}
      value={pos}
      renderLabel={({ valueNow }) =>
        formatDuration((valueNow / 100) * durationToUse)
      }
      onBeforeChange={onBeforeChange}
      onChangeCallback={seekAudio}
      onAfterChange={onAfterChange}
      isDisabled={!isReady}
    />
  );
};

export default SeekBar;
