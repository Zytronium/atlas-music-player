import { Volume2 } from "lucide-react";

export default function VolumeControls(props) {
  return (
    <div className="mb-1 flex flex-row">
      <Volume2
        className={`${props.loading ? "opacity-50" : ""} text-text fill-text dark:text-primary dark:fill-primary size-5`}
      />
      <input
        type="range"
        defaultValue={75}
        readOnly={props.loading}
        className={`${props.loading ? "pointer-events-none opacity-50" : ""} accent-primary ml-2 w-full`}
      />
    </div>
  );
}
