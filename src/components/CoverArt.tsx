import Placeholder from "../assets/placeholder.svg";
import { JSX } from "react";

type Props = {
  src?: string;
  alt?: string;
  lyrics?: string | null;
};

export default function CoverArt(props: Props): JSX.Element {
  return (
    <img
      src={props.src ?? Placeholder}
      alt={props.alt ?? "Album cover"}
      height="400"
      className="mb-6 aspect-square rounded-md object-cover"
    />
  );
}
