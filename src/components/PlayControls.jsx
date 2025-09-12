import { Play, Pause, FastForward, Rewind, Repeat } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex flex-row justify-between w-full">
      <button className="flex h-12 w-12 items-center justify-center">
        <span className="text-lg text-slate-800">1x</span>
      </button>
      <button className="flex h-12 w-12 items-center justify-center">
        <Rewind className="fill-black text-transparent" />
      </button>
      <button className="flex h-12 w-12 items-center justify-center rounded border-black outline-3">
        <Play className="fill-black text-transparent" />
      </button>
      {/*      <button className="flex h-12 w-12 items-center justify-center">
        <Pause className="fill-black text-transparent" />
      </button>*/}
      <button className="flex h-12 w-12 items-center justify-center">
        <FastForward className="fill-black text-transparent" />
      </button>
      <button className="flex h-12 w-12 items-center justify-center">
        <Repeat />
      </button>
    </div>
  );
}
