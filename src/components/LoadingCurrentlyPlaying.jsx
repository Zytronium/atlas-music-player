import PlayControls from "./PlayControls.jsx";
import VolumeControls from "./VolumeControls.jsx";

export default function LoadingCurrentlyPlaying() {
  return (
    <div className="flex w-full flex-col p-6 md:w-[50%]">
      <div className="mb-6 flex aspect-square w-full animate-pulse items-center justify-center self-center rounded-md bg-gray-300 dark:bg-gray-500">
        <svg
          className="h-10 w-10 text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      {/*<LoadingSongTitle />*/}
      <div className="flex flex-col">
        <div className="mt-1 mb-4 flex h-6 max-w-66 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-5 flex h-4 max-w-36 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <PlayControls loading={true} />
      <VolumeControls loading={true} />
      {/* TODO: implement loading state for these that disables these elements */}
    </div>
  );
}
