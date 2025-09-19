import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import LoadingSkeleton from "./LoadingSkeleton";
import { PlaylistSong, Song, Lyrics } from "../types";
import { fetchPlaylist, fetchSong, fetchLyrics } from "../api_helper";
import { JSX, useEffect, useState } from "react";

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<PlaylistSong[] | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [lyrics, setLyrics] = useState<Lyrics | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        // Load the playlist
        const pl = await fetchPlaylist();
        setPlaylist(pl);

        // Display the first song
        const first = pl[0];
        if (!first) throw new Error("Playlist is empty");

        // Load full song data
        const songDetails = await fetchSong(first.id);
        setCurrentSong(songDetails);

        // Load lyrics for that song
        const lyr = await fetchLyrics(first.id);
        setLyrics(lyr);

        setLoading(false);
      } catch (e: unknown) {
        alert("An error occurred loading the playlist.");
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="dark:bg-dark-background-2 dark:text-dark-text bg-background-2 text-text flex h-full min-h-screen flex-col justify-between p-2 sm:p-8">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <MusicPlayer
          playlist={playlist!}
          song={currentSong!}
          lyrics={lyrics!.lyrics}
          playbackSpeed={playbackSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
          paused={paused}
          setPaused={setPaused}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
