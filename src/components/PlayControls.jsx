import { Play, /*Pause, */ FastForward, Rewind, Repeat } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="mb-4 flex w-full flex-row items-center justify-between">
      <button className="flex h-10 w-10 cursor-pointer items-center justify-center">
        <span className="text-primary text-lg font-[500]">1x</span>
      </button>
      <button disabled className="flex h-10 w-10 items-center justify-center">
        <Rewind className="fill-primary text-transparent opacity-50" />
      </button>
      <button className="outline-primary bg-background-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md outline-3">
        <Play className="fill-primary text-transparent" />
      </button>
      {/*<button className="outline-primary bg-background-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md outline-3">
        <Pause className="fill-primary text-transparent" />
      </button>*/}
      <button className="flex h-10 w-10 cursor-pointer items-center justify-center">
        <FastForward className="fill-primary text-transparent" />
      </button>
      <button className="text-primary flex h-10 w-10 cursor-pointer items-center justify-center">
        <Repeat />
      </button>
    </div>
  );
}
