import PlayControls from "./PlayControls.jsx";
import VolumeControls from "./VolumeControls.jsx";

export default function LoadingCurrentlyPlaying() {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <div className="mb-6 flex aspect-square w-full animate-pulse items-center justify-center self-center rounded-md bg-gray-300 dark:bg-gray-700"></div>
      {/*<LoadingSongTitle />*/}
      <div className="flex flex-col">
        <div className="mb-3 flex h-7 w-66 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700"></div>
        <div className="mb-5 flex h-5 w-36 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <PlayControls loading={true} />
      <VolumeControls loading={true} />
      {/* TODO: implement loading state for these that disables these elements */}
    </div>
  );
}
