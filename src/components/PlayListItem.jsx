import SongTitle from "./SongTitle.jsx";

export default function PlayListItem(props) {
  return (
    <button className={`flex flex-row w-full items-center mt-4 justify-between bg-${props.active ? 'gray-200' : 'white'} h-12 rounded-lg`}>
      <SongTitle title={props.title} artist={props.artist} size={"small"}/>
      <p className="text-gray-400">{props.duration}</p>
    </button>
  );
}
