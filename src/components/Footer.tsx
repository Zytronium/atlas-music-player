import { JSX } from "react";

export default function Footer(): JSX.Element {
  const year: number = new Date().getFullYear();
  return <div className="p-8 text-center">&copy; {year} Atlas School</div>;
}
