import Placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <img
      src={Placeholder}
      alt="Album cover"
      height="400"
      className="aspect-square object-cover mb-6 rounded-md"
    />
  );
}
