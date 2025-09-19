import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import { PlaylistSong, Song } from "../types";
import { JSX } from "react";

type Props = {
  playlist: PlaylistSong[] | null;
  song: Song | null;
  lyrics: string;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  paused: boolean;
  setPaused: (speed: boolean) => void;
};

export default function MusicPlayer(props: Props): JSX.Element {
  return (
    <div className="border-primary bg-background text-text dark:bg-dark-background dark:text-dark-text flex w-full max-w-[56rem] flex-col self-center rounded-lg border-2 shadow-lg md:flex-row">
      <CurrentlyPlaying {...props} />
      <Playlist {...props} />
    </div>
  );
}
