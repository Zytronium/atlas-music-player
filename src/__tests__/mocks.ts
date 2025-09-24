import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      {
        id: "song-1",
        title: "Mock Song",
        artist: "Test Artist",
        genre: "Pop",
        duration: 205,
      },
    ]);
  }),

  http.get("/api/v1/songs/:songId", ({ params }) => {
    return HttpResponse.json({
      id: params.songId,
      title: "Mock Song",
      artist: "Test Artist",
      genre: "Pop",
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
