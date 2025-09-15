import SongTitle from "./SongTitle.jsx";

export default function PlayListItem(props) {
  return (
    // bg-slate-100 | This comment is needed so this class can be used due to the unusual way it's used below
    <button className={`flex flex-row w-full items-center justify-between bg-${props.active ? 'slate-100' : 'white'} h-12 rounded-md p-1 cursor-pointer`}>
      <SongTitle title={props.title} artist={props.artist} size={"small"}/>
      <p className="text-slate-400">{props.duration}</p>
    </button>
  );
}
