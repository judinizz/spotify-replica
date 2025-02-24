import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({ duration, randomIdFoward, randomIdBackward, audio }) => {
  const { id } = useParams();
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    if (!audioPlayer.current) return;

    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = 0;
      setCurrentTime(formatTime(0));

      if (progressBar.current) {
        progressBar.current.style.setProperty("--_progress", "0%");
      }
    }
  }, [id]);

  useEffect(() => {
    const updateProgress = () => {
      if (audioPlayer.current) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

        if (progressBar.current) {
          progressBar.current.style.setProperty(
            "--_progress",
            (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
          );
        }
      }
    };

    if (isPlaying) {
      const intervalId = setInterval(updateProgress, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, durationInSeconds]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdBackward}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />

        <Link to={`/song/${randomIdFoward}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
