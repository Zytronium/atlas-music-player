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
  index: number;
}

export interface Lyrics {
  lyrics: string;
}

// NOTE: Update Props in PlayControls.tsx too when updating this
export interface MasterProp {
  playlist: PlaylistSong[] | null;
  song: Song | null;
  lyrics?: string;
  playbackSpeed: number;
  setPlaybackSpeed: (s: number) => void;
  volume: number;
  setVolume: (v: number) => void; // V.irtual
  paused: boolean;
  setPaused: (p: boolean) => void; // P.rivate
  shuffled: boolean;
  setShuffled: (s: boolean) => void; // S.erver
  goPrev: () => Promise<void>;
  goNext: () => Promise<void>; // ?
  songIndex: number;
  goToSong: (index: number) => void;
  playlistLength: number;
}
