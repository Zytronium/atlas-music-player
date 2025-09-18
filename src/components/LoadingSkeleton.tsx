import LoadingCurrentlyPlaying from "./LoadingCurrentlyPlaying";
import LoadingPlaylist from "./LoadingPlaylist";
import { JSX } from "react";

export default function LoadingSkeleton(): JSX.Element {
  return (
    <div className="border-primary bg-background text-text dark:bg-dark-background dark:text-dark-text flex w-full max-w-[56rem] flex-col self-center rounded-lg border-2 shadow-lg md:flex-row">
      <LoadingCurrentlyPlaying />
      <LoadingPlaylist />
    </div>
  );
}
