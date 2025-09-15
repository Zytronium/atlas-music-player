import PlayListItem from "./PlayListItem.jsx";

export default function Playlist() {
  return (
    <div className="flex flex-col w-[50%] p-6 border-l-[1px] border-slate-200">
      <h3 className='font-semibold text-lg'>Playlist</h3>
      <div className="flex flex-col w-full mt-4 pr-4 gap-1">
        <PlayListItem title={"Painted in Blue"} artist={"Soul Canvas"} duration={"5:55"}
                      active={true} />
        <PlayListItem title={"Tidal Drift"} artist={"Echoes of the Sea"} duration={"8:02"} />
        <PlayListItem title={"Fading Shadows"} artist={"The Emberlight"} duration={"3:01"} />
        <PlayListItem title={"Cosmic Drift"} artist={"Solar Flare"} duration={"5:01"} />
        <PlayListItem title={"Urban Serenade"} artist={"Midnight Groove"} duration={"4:54"} />
        <PlayListItem title={"Whispers in the Wind"} artist={"Rust & Ruin"} duration={"6:13"} />
        <PlayListItem title={"Electric Fever"} artist={"Neon Jungle"} duration={"8:41"} />
        <PlayListItem title={"Edge of the Abyss"} artist={"Steel Horizon"} duration={"2:27"} />
        <PlayListItem title={"Golden Haze"} artist={"Velvet Waves"} duration={"3:15"} />
        <PlayListItem title={"Shatter the Silence"} artist={"Thunderclap Echo"} duration={"8:22"} />
      </div>
    </div>
  );
}
