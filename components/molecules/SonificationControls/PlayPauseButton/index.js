"use client";
import { useState } from "react";
import IconButton from "@/components/atomic/IconButton";
import parameters from "@/components/organisms/Listener/parameters";
import styles from "./styles.module.css";

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    parameters.isSonificationPlaying = newState;
  };

  return (
    <IconButton
      text={isPlaying ? "Pause Sonification" : "Play Sonification"}
      icon={isPlaying ? "Pause" : "Play"}
      onClick={handleClick}
      styleAs="primary"
      className={styles.button}
    />
  );
};

PlayPauseButton.displayName = "Molecule.PlayPauseButton";

export default PlayPauseButton;
