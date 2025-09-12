import PlayListItem from "./PlayListItem.jsx";

export default function Playlist() {
  return <div className="flex flex-col w-[50%] p-4">
    <PlayListItem title={"Title"} artist={"artist"} duration={"5:54"}
                  active={true} />
    <PlayListItem title={"Title"} artist={"artist"} duration={"5:54"} />
    <PlayListItem title={"Title"} artist={"artist"} duration={"5:54"} />
  </div>;
}