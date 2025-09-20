import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { JSX } from "react";
import { PlaylistSong, Song } from "../types.ts";

type Props = {
  playlist: PlaylistSong[] | null;
  song: Song | null;
  lyrics?: string;
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

export default function CurrentlyPlaying(props: Props): JSX.Element {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <CoverArt
        src={props.song!.cover}
        alt={props.song!.title}
        lyrics={props.lyrics}
      />
      <SongTitle title={props.song!.title} artist={props.song!.artist} />
      <PlayControls {...props} />
      <VolumeControls />
    </div>
  );
}
