import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="mb-1 flex flex-row">
      <Volume2 className="text-text fill-text dark:text-primary dark:fill-primary size-5" />
      <input
        type="range"
        defaultValue={75}
        className="accent-primary ml-2 w-full"
      />
    </div>
  );
}
