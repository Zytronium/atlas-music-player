import CurrentlyPlaying from "./CurrentlyPlaying.jsx";
import Playlist from "./Playlist.jsx";

export default function MusicPlayer() {
  return (
    <div
      className="flex flex-row w-full max-w-[56rem] self-center rounded-lg shadow-lg">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
