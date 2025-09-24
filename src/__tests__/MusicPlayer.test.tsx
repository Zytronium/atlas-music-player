import {
  expect,
  test,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
} from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import MusicPlayer from "../components/MusicPlayer";
import { fetchPlaylist, fetchSong, fetchLyrics } from "../api_helper";
import { JSX, useEffect, useState } from "react";
import type { PlaylistSong, Song, Lyrics } from "../types";
import { server } from "./mocks";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockPlaylist: PlaylistSong[] = [
  {
    id: "song-1",
    title: "Mock Song 1",
    artist: "Artist A",
    genre: "Pop",
    duration: 205,
  },
  {
    id: "song-2",
    title: "Mock Song 2",
    artist: "Artist B",
    genre: "Metal",
    duration: 180,
  },
  {
    id: "song-3",
    title: "Mock Song 3",
    artist: "Artist C",
    genre: "Synth",
    duration: 210,
  },
];

const makeSong = (id: string, title: string): Song => ({
  index: 0,
  id,
  title,
  artist: "Artist",
  genre: "Genre",
  duration: 123,
  cover: "https://share.zytronium.dev/images/Atlas/AtlasLogo.png",
  song: "https://share.zytronium.dev/audio/Rickroll.mp3",
});

const makeLyrics = (id: string): Lyrics => ({ lyrics: `Lyrics for ${id}` });

function TestWrapper(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState<PlaylistSong[] | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [songIndex, setSongIndex] = useState<number>(0);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<0.5 | 1.0 | 2.0>(1);
  const [paused, setPaused] = useState<boolean>(true);
  const [shuffled, setShuffled] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    (async () => {
      const pl = await fetchPlaylist();
      setPlaylist(pl);
      const first = pl[0];
      const full = await fetchSong(first.id);
      setCurrentSong({ ...full, index: 0 } as Song & { index: number });
      setSongIndex(0);
      const lyr = await fetchLyrics(first.id);
      setLyrics(lyr.lyrics);
      setLoading(false);
    })();
  }, []);

  async function goToSong(newIdx: number) {
    if (!playlist) return;
    const songInfo = playlist[newIdx];
    const fullSong = await fetchSong(songInfo.id);
    setCurrentSong({ ...fullSong, index: newIdx } as Song & { index: number });
    setSongIndex(newIdx);
  }

  async function goPrev() {
    if (songIndex > 0) await goToSong(songIndex - 1);
  }

  async function goNext() {
    if (!playlist) return;
    if (!shuffled && songIndex < playlist.length - 1) {
      await goToSong(songIndex + 1);
    } else {
      let randomIdx;
      do {
        randomIdx = Math.floor(Math.random() * playlist.length);
      } while (songIndex === randomIdx);
      if (shuffled) await goToSong(randomIdx);
    }
  }

  if (loading || !playlist || !currentSong) return <div>loading</div>;

  return (
    <MusicPlayer
      playlist={playlist}
      song={currentSong as never} // gonna give you up
      lyrics={lyrics as string}
      songIndex={songIndex}
      goToSong={(i: number) => void goToSong(i)}
      playlistLength={playlist.length}
      goPrev={() => goPrev()}
      goNext={() => goNext()}
      playbackSpeed={playbackSpeed}
      setPlaybackSpeed={(s) => setPlaybackSpeed(s)}
      paused={paused}
      setPaused={(p) => setPaused(p)}
      shuffled={shuffled}
      setShuffled={(s) => setShuffled(s)}
      volume={volume}
      setVolume={(v) => setVolume(v)}
    />
  );
}

beforeEach(() => {
  server.use(
    http.get("/api/v1/playlist", () => HttpResponse.json(mockPlaylist)),
    http.get("/api/v1/songs/:songId", ({ params }) => {
      const { songId } = params;
      const idx = mockPlaylist.findIndex((p) => p.id === songId);
      const title = idx >= 0 ? mockPlaylist[idx].title : `Unknown ${songId}`;
      return HttpResponse.json(makeSong(String(songId), title));
    }),
    http.get("/api/v1/lyrics/:songId", ({ params }) =>
      HttpResponse.json(makeLyrics(String(params.songId))),
    ),
  );
});

/* --- Tests --- */

test("default current song is the first song in playlist", async () => {
  render(<TestWrapper />);
  await waitFor(() =>
    expect(screen.getAllByText("Mock Song 1")[0]).toBeInTheDocument(),
  );
  expect(screen.getByText("Artist A")).toBeInTheDocument();
});

test("play / pause can be toggled via PlayControls", async () => {
  render(<TestWrapper />);
  await waitFor(() => screen.getAllByText("Mock Song 1"));
  const playButton =
    screen.queryByRole("button", { name: /play/i }) ||
    screen.queryByRole("button", { name: /►/i }) ||
    screen.queryByText(/play/i);
  expect(playButton).toBeTruthy();
  fireEvent.click(playButton as Element);
  const pauseButton =
    screen.queryByRole("button", { name: /pause/i }) ||
    screen.queryByText(/pause/i);
  expect(pauseButton).toBeTruthy();
});

test("forward (next) button advances to next song", async () => {
  render(<TestWrapper />);
  await waitFor(() => screen.getAllByText("Mock Song 1"));
  const nextButton =
    screen.queryByRole("button", { name: /next|forward|»/i }) ||
    screen.queryByText(/next/i);
  expect(nextButton).toBeTruthy();
  fireEvent.click(nextButton as Element);
  await waitFor(() =>
    expect(screen.getAllByText("Mock Song 2")[0]).toBeInTheDocument(),
  );
});

test("back (previous) button goes to previous song", async () => {
  render(<TestWrapper />);
  await waitFor(() => screen.getAllByText("Mock Song 1"));
  const nextButton =
    screen.queryByRole("button", { name: /next|forward|»/i }) ||
    screen.queryByText(/next/i);
  fireEvent.click(nextButton as Element);
  await waitFor(() => screen.getAllByText("Mock Song 2"));
  const prevButton =
    screen.queryByRole("button", { name: /prev|back|previous|«/i }) ||
    screen.queryByText(/prev|back|previous/i);
  expect(prevButton).toBeTruthy();
  fireEvent.click(prevButton as Element);
  await waitFor(() =>
    expect(screen.getAllByText("Mock Song 1")[0]).toBeInTheDocument(),
  );
});

test("clicking a song in the playlist changes the current song", async () => {
  render(<TestWrapper />);
  await waitFor(() => screen.getAllByText("Mock Song 1"));
  const target = screen.getByText("Mock Song 3");
  expect(target).toBeTruthy();
  fireEvent.click(target);
  await waitFor(() =>
    expect(screen.getAllByText("Mock Song 3")[0]).toBeInTheDocument(),
  );
});
