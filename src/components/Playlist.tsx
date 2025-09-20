import PlayListItem from "./PlayListItem";
import { JSX } from "react";
import { PlaylistSong } from "../types.ts";

type Props = {
  playlist: PlaylistSong[] | null;
  songIndex: number;
  goToSong: (index: number) => void;
};

export default function Playlist(props: Props): JSX.Element {
  return (
    <div className="border-tertiary flex w-full flex-col border-t-[1px] p-6 md:w-[50%] md:border-t-0 md:border-l-[1px]">
      <h3 className="text-lg font-semibold">Playlist</h3>
      <div className="mt-4 flex w-full flex-col gap-1 pr-4">
        {Array.from({ length: props.playlist?.length ?? 0 }).map((_, i) => (
          <PlayListItem
            key={i}
            index={i}
            title={props.playlist![i].title}
            artist={props.playlist![i].artist}
            duration={props.playlist![i].duration}
            active={props.songIndex === i}
            setSongIndex={props.goToSong}
          />
        ))}
      </div>
    </div>
  );
}
