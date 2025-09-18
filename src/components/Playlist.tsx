import PlayListItem from "./PlayListItem";
import { JSX } from "react";

export default function Playlist(): JSX.Element {
  return (
    <div className="border-tertiary flex w-full flex-col border-t-[1px] p-6 md:w-[50%] md:border-t-0 md:border-l-[1px]">
      <h3 className="text-lg font-semibold">Playlist</h3>
      <div className="mt-4 flex w-full flex-col gap-1 pr-4">
        <PlayListItem
          title={"Painted in Blue"}
          artist={"Soul Canvas"}
          duration={"5:55"}
          active={true}
        />
        <PlayListItem
          title={"Tidal Drift"}
          artist={"Echoes of the Sea"}
          duration={"8:02"}
        />
        <PlayListItem
          title={"Fading Shadows"}
          artist={"The Emberlight"}
          duration={"3:01"}
        />
        <PlayListItem
          title={"Cosmic Drift"}
          artist={"Solar Flare"}
          duration={"5:01"}
        />
        <PlayListItem
          title={"Urban Serenade"}
          artist={"Midnight Groove"}
          duration={"4:54"}
        />
        <PlayListItem
          title={"Whispers in the Wind"}
          artist={"Rust & Ruin"}
          duration={"6:13"}
        />
        <PlayListItem
          title={"Electric Fever"}
          artist={"Neon Jungle"}
          duration={"8:41"}
        />
        <PlayListItem
          title={"Edge of the Abyss"}
          artist={"Steel Horizon"}
          duration={"2:27"}
        />
        <PlayListItem
          title={"Golden Haze"}
          artist={"Velvet Waves"}
          duration={"3:15"}
        />
        <PlayListItem
          title={"Shatter the Silence"}
          artist={"Thunderclap Echo"}
          duration={"8:22"}
        />
      </div>
    </div>
  );
}
