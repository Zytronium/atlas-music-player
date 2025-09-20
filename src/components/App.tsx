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
  const [songIndex, setSongIndex] = useState<number>(0);
  const [lyrics, setLyrics] = useState<Lyrics | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [paused, setPaused] = useState<boolean>(false);
  const [shuffled, setShuffled] = useState<boolean>(false);

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
        setCurrentSong({ ...songDetails, index: 0 });
        setSongIndex(0);

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

  async function goToSong(newIdx: number) {
    if (!playlist) return;
    const songInfo = playlist[newIdx];
    const fullSong = await fetchSong(songInfo.id);
    setCurrentSong({ ...fullSong, index: newIdx });
    setSongIndex(newIdx);
  }

  async function goPrev() {
    if (songIndex > 0) {
      await goToSong(songIndex - 1);
    }
  }

  async function goNext() {
    if (!playlist) return;
    if (!shuffled && songIndex < playlist.length - 1) {
      await goToSong(songIndex + 1);
    } else {
      if (shuffled) await goToSong(Math.floor(Math.random() * playlist.length));
    }
  }

  return (
    <div className="dark:bg-dark-background-2 dark:text-dark-text bg-background-2 text-text flex h-full min-h-screen flex-col justify-between p-2 sm:p-8">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <MusicPlayer
          playlist={playlist!}
          song={currentSong!}
          lyrics={lyrics!.lyrics}
          songIndex={songIndex}
          playlistLength={playlist!.length}
          goPrev={goPrev}
          goNext={goNext}
          playbackSpeed={playbackSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
          paused={paused}
          setPaused={setPaused}
          shuffled={shuffled}
          setShuffled={setShuffled}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
