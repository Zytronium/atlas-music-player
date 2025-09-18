export interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

export interface Song extends PlaylistSong {
  cover: string;
  song: string;
}

export interface Lyrics {
  lyrics: string;
}
