import { Play, /*Pause,*/ FastForward, Rewind, Repeat } from "lucide-react";

export default function PlayControls(props) {
  return (
    <div className="mb-4 flex w-full flex-row items-center justify-between">
      <button
        disabled={props.loading}
        className={`flex h-10 w-10 items-center justify-center ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <span className="text-text dark:text-primary text-lg font-[500]">
          1x
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
      >
        <Play className="fill-text dark:fill-primary text-transparent" />
      </button>

      {/* <button
        disabled={props.loading}
        className={`outline-text dark:outline-primary bg-background-2 dark:bg-dark-background-2 flex h-12 w-12 items-center justify-center rounded-md outline-3 ${
          props.loading ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <Pause className="fill-text dark:fill-primary text-transparent" />
      </button> */}

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
