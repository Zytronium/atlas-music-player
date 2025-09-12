import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="flex flex-row mt-4">
      <Volume2 className="fill-black" />
      <input
        type="range"
        className="ml-2 w-full accent-gray-500 outline-2 outline-offset-2 outline-transparent"
      />
    </div>
  );
}
