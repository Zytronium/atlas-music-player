import CoverArt from "./CoverArt.jsx";
import SongTitle from "./SongTitle.jsx";
import PlayControls from "./PlayControls.jsx";
import VolumeControls from "./VolumeControls.jsx";

export default function CurrentlyPlaying() {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <CoverArt />
      <SongTitle title={"Painted in Blue"} artist={"Soul Canvas"} />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
