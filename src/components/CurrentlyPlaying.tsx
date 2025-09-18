import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { JSX } from "react";
import { PlaylistSong, Song } from "@/types.ts";

type Props = {
  playlist: PlaylistSong[] | null;
  song: Song | null;
  lyrics?: string;
};

export default function CurrentlyPlaying(props: Props): JSX.Element {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <CoverArt src={props.song!.cover} lyrics={props.lyrics} />
      {/*todo: set alt using song title*/}
      <SongTitle title="Painted in Blue" artist="Soul Canvas" />
      {/*todo: get title and artist for current song*/}
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
