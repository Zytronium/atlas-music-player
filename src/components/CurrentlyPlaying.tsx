import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { JSX } from "react";

export default function CurrentlyPlaying(): JSX.Element {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <CoverArt />
      <SongTitle title="Painted in Blue" artist="Soul Canvas" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
