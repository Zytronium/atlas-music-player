import { Play, Pause, FastForward, Rewind, Shuffle } from "lucide-react";
import { JSX } from "react";

type Props = {
  loading?: boolean;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  paused: boolean;
  setPaused: (speed: boolean) => void;
  shuffled: boolean;
  setShuffled: (speed: boolean) => void;
  goPrev: () => Promise<void>;
  goNext: () => Promise<void>;
  songIndex: number;
  playlistLength: number;
};

export default function PlayControls(props: Props): JSX.Element {
  const { playbackSpeed, setPlaybackSpeed } = props;
  return (
    <div className="mb-4 flex w-full flex-row items-center justify-between">
      {/* PLAYBACK SPEED */}
      <button
        disabled={props.loading}
        className={`flex h-10 w-10 items-center justify-center ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <span
          className="text-text dark:text-primary text-lg font-[500]"
          onClick={() => {
            switch (playbackSpeed) {
              case 0.5:
                setPlaybackSpeed(1);
                break;

              case 1:
                setPlaybackSpeed(2);
                break;

              case 2:
                setPlaybackSpeed(0.5);
                break;

              default:
                console.warn(
                  `Unexpected playback speed ${playbackSpeed}. Setting to 1.`,
                );
                setPlaybackSpeed(1);
                break;
            }
          }}
        >
          {playbackSpeed}x
        </span>
      </button>

      {/* PREV SONG */}
      <button
        disabled={props.loading || props.songIndex === 0}
        className={`flex h-10 w-10 items-center justify-center ${
          props.loading || props.songIndex === 0
            ? "cursor-default opacity-50"
            : "cursor-pointer"
        }`}
        onClick={props.goPrev}
      >
        <Rewind className="fill-text dark:fill-primary text-transparent" />
      </button>

      {/* PAUSE / PLAY */}
      <button
        disabled={props.loading}
        className={`outline-text dark:outline-primary bg-background-2 dark:bg-dark-background-2 flex h-12 w-12 items-center justify-center rounded-md outline-3 ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
        onClick={() => {
          props.setPaused(!props.paused);
        }}
      >
        {props.paused ? (
          <Play className="fill-text dark:fill-primary text-transparent" />
        ) : (
          <Pause className="fill-text dark:fill-primary text-transparent" />
        )}
      </button>

      {/* NEXT SONG */}
      <button
        disabled={
          props.loading ||
          (!props.shuffled && props.songIndex >= props.playlistLength - 1)
        }
        className={`flex h-10 w-10 items-center justify-center ${
          props.loading ||
          (!props.shuffled && props.songIndex >= props.playlistLength - 1)
            ? "cursor-default opacity-50"
            : "cursor-pointer"
        }`}
        onClick={props.goNext}
      >
        <FastForward className="fill-text dark:fill-primary text-transparent" />
      </button>

      {/* SHUFFLE */}
      <button
        disabled={props.loading}
        className={`text-text dark:text-primary flex h-10 w-10 items-center justify-center ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
        onClick={() => {
          props.setShuffled(!props.shuffled);
        }}
      >
        <Shuffle
          className={` ${
            props.shuffled
              ? "text-primary stroke-[2.5] drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
              : "stroke-1"
          }`}
        />
      </button>
    </div>
  );
}
