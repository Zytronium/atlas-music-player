import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="flex flex-row mb-1">
      <Volume2 className="fill-black size-5" />
      <input
        type="range"
        defaultValue={75}
        className="ml-2 w-full accent-gray-500 outline-2 outline-offset-2 outline-transparent"
      />
    </div>
  );
}
