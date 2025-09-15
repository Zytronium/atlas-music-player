import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="mb-1 flex flex-row">
      <Volume2 className="size-5 fill-black" />
      <input
        type="range"
        defaultValue={75}
        className="ml-2 w-full accent-gray-500"
      />
    </div>
  );
}
