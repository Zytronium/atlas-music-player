import SongTitle from "./SongTitle";
import { JSX } from "react";

type Props = {
  duration: number;
  title: string;
  artist: string;
  active?: boolean;
  index: number;
  setSongIndex: (index: number) => void;
};

function formatSeconds(totalSeconds: number): string {
  // NOTE: Task 1 says to use HH:MM format, but it meant MM:SS
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");
  // @ts-expect-error False alarm; will probably fix later. It thinks string.replaceAll() doesn't exist but it does.
  return `${minutes}:${pad(seconds)}`.replaceAll("NaN", "??");
}

export default function PlayListItem(props: Props): JSX.Element {
  return (
    <button
      className={`flex w-full flex-row items-center justify-between ${props.active ? "bg-tertiary" : ""} h-10 cursor-pointer rounded-md px-1`}
      onClick={() => props.setSongIndex(props.index)}
    >
      <SongTitle title={props.title} artist={props.artist} size={"small"} />
      <p className="text-muted dark:text-dark-muted text-sm font-[500]">
        {formatSeconds(props.duration)}
      </p>
    </button>
  );
}
