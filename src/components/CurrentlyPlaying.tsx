import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { JSX } from "react";
import { MasterProp } from "../types.ts";

export default function CurrentlyPlaying(props: MasterProp): JSX.Element {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <CoverArt
        src={props.song!.cover}
        alt={props.song!.title}
        lyrics={props.lyrics}
      />
      <SongTitle title={props.song!.title} artist={props.song!.artist} />
      <PlayControls {...props} />
      <VolumeControls setVolume={props.setVolume} />
    </div>
  );
}
