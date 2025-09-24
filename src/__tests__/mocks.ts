import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      {
        id: "song-1",
        title: "Mock Song 1",
        artist: "Test Artist A",
        genre: "Pop",
        duration: 205,
      },
      {
        id: "song-2",
        title: "Mock Song 2",
        artist: "Test Artist B",
        genre: "Metal",
        duration: 180,
      },
      {
        id: "song-3",
        title: "Mock Song 3",
        artist: "Test Artist C",
        genre: "Synth",
        duration: 210,
      },
    ]);
  }),

  http.get("/api/v1/songs/:songId", ({ params }) => {
    return HttpResponse.json({
      id: params.songId,
      title: `Mock Song ${params.songId === "song-1" ? "1" : params.songId === "song-2" ? "2" : "3"}`,
      artist: `Test Artist ${params.songId === "song-1" ? "A" : params.songId === "song-2" ? "B" : "C"}`,
      genre:
        params.songId === "song-1"
          ? "Pop"
          : params.songId === "song-2"
            ? "Metal"
            : "Synth",
      duration: 205,
      cover: "https://share.zytronium.dev/images/Atlas/AtlasLogo.png",
      song: "https://share.zytronium.dev/audio/Rickroll.mp3",
    });
  }),

  http.get("/api/v1/lyrics/:songId", ({ params }) => {
    return HttpResponse.json({
      lyrics: `Lyrics for ${params.songId}`,
    });
  }),
];

export const server = setupServer(...handlers);
