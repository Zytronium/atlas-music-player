import SongTitle from "./SongTitle.jsx";

export default function PlayListItem(props) {
  return (
    <button
      className={`flex w-full flex-row items-center justify-between ${props.active ? "bg-tertiary" : ""} h-10 cursor-pointer rounded-md px-1`}
    >
      <SongTitle title={props.title} artist={props.artist} size={"small"} />
      <p className="text-muted dark:text-dark-muted text-sm font-[500]">
        {props.duration}
      </p>
    </button>
  );
}
