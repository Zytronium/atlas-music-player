import CoverArt from "./CoverArt.jsx";
import SongTitle from "./SongTitle.jsx";
import PlayControls from "./PlayControls.jsx";
import VolumeControls from "./VolumeControls.jsx";
import PlayListItem from "./PlayListItem.jsx";

export default function MusicPlayer() {
  return (
    <div
      className="flex flex-row w-[56rem] self-center rounded-lg p-5 shadow-lg">
      <div className="flex flex-col w-[50%]">
        <CoverArt />
        <SongTitle title={"Title"} artist={"artist"}/>
        <PlayControls />
        <VolumeControls />
      </div>
      <div className="flex flex-col w-[50%] p-4">
        <PlayListItem title={"Title"} artist={"artist"} duration={"5:54"} active={true} />
        <PlayListItem title={"Title"} artist={"artist"} duration={"5:54"} />
        <PlayListItem title={"Title"} artist={"artist"} duration={"5:54"} />
      </div>
    </div>
  );
}
