import Placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <img
      src={Placeholder}
      alt="Album cover"
      height="400"
      className="aspect-square object-cover my-4 mx-2 rounded-lg"
    />
  );
}
