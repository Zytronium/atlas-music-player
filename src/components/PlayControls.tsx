import { Play, Pause, FastForward, Rewind, Repeat } from "lucide-react";
import { JSX } from "react";

type Props = {
  loading?: boolean;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  paused: boolean;
  setPaused: (speed: boolean) => void;
};

export default function PlayControls(props: Props): JSX.Element {
  const { playbackSpeed, setPlaybackSpeed } = props;
  return (
    <div className="mb-4 flex w-full flex-row items-center justify-between">
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

      <button
        disabled
        className={`flex h-10 w-10 items-center justify-center opacity-50`}
      >
        <Rewind className="fill-text dark:fill-primary text-transparent" />
      </button>

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

      <button
        disabled={props.loading}
        className={`flex h-10 w-10 items-center justify-center ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <FastForward className="fill-text dark:fill-primary text-transparent" />
      </button>

      <button
        disabled={props.loading}
        className={`text-text dark:text-primary flex h-10 w-10 items-center justify-center ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <Repeat />
      </button>
    </div>
  );
}
