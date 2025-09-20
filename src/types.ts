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
  setPlaybackSpeed: (speed: number) => void;
  paused: boolean;
  setPaused: (speed: boolean) => void;
  shuffled: boolean;
  setShuffled: (speed: boolean) => void;
  goPrev: () => Promise<void>;
  goNext: () => Promise<void>;
  songIndex: number;
  playlistLength: number;
}
