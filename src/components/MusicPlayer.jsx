import CurrentlyPlaying from "./CurrentlyPlaying.jsx";
import Playlist from "./Playlist.jsx";

export default function MusicPlayer() {
  return (
    <div className="flex w-full max-w-[56rem] flex-col self-center rounded-lg shadow-lg md:flex-row">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
