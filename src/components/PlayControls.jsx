import { Play, /*Pause, */FastForward, Rewind, Repeat } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex flex-row justify-between items-center w-full mb-4">
      <button className="cursor-pointer flex h-10 w-10 items-center justify-center">
        <span className="text-lg text-slate-800 font-[500]">1x</span>
      </button>
      <button disabled className="flex h-10 w-10 items-center justify-center">
        <Rewind className="fill-black text-transparent opacity-50" />
      </button>
      <button className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-md border-black outline-3">
        <Play className="fill-black text-transparent" />
      </button>
      {/*      <button className="flex h-12 w-12 items-center justify-center">
        <Pause className="fill-black text-transparent" />
      </button>*/}
      <button className="cursor-pointer flex h-10 w-10 items-center justify-center">
        <FastForward className="fill-black text-transparent" />
      </button>
      <button className="cursor-pointer flex h-10 w-10 items-center justify-center">
        <Repeat />
      </button>
    </div>
  );
}
