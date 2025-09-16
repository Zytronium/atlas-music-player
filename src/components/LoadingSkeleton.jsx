import LoadingCurrentlyPlaying from "./LoadingCurrentlyPlaying.jsx";
// import LoadingPlaylist from "./LoadingPlaylist.jsx";
import Playlist from "./Playlist.jsx";

export default function LoadingSkeleton() {
  return (
    <div className="border-primary bg-background text-text dark:bg-dark-background dark:text-dark-text flex w-full max-w-[56rem] flex-col self-center rounded-lg border-2 shadow-lg md:flex-row">
      <LoadingCurrentlyPlaying />
      <Playlist />
    </div>
  );
}
