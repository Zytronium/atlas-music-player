import CurrentlyPlaying from "./CurrentlyPlaying.jsx";
import Playlist from "./Playlist.jsx";

export default function MusicPlayer() {
  return (
    <div
      className="flex flex-row w-[56rem] self-center rounded-lg p-5 shadow-lg">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
