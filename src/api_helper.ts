import { PlaylistSong, Song, Lyrics } from "./types";

const API_ROOT = "/api/v1";

export async function fetchPlaylist(): Promise<PlaylistSong[]> {
  const resp = await fetch(`${API_ROOT}/playlist`);
  if (!resp.ok) throw new Error("Failed to load playlist");
  return resp.json();
}

export async function fetchSong(id: string): Promise<Song> {
  const resp = await fetch(`${API_ROOT}/songs/${encodeURIComponent(id)}`);
  if (!resp.ok) throw new Error(`Failed to load song ${id}`);
  return resp.json();
}

export async function fetchLyrics(id: string): Promise<Lyrics> {
  const resp = await fetch(`${API_ROOT}/lyrics/${encodeURIComponent(id)}`);
  if (!resp.ok) throw new Error(`Failed to load lyrics for ${id}`);
  return resp.json();
}
