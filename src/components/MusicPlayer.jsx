import CurrentlyPlaying from "./CurrentlyPlaying.jsx";
import Playlist from "./Playlist.jsx";

export default function MusicPlayer() {
  return (
    <div className="border-primary bg-background text-text flex w-full max-w-[56rem] flex-col self-center rounded-lg border-2 shadow-lg md:flex-row">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
