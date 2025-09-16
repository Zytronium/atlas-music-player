function LoadingPlayListItem() {
  return (
    <button
      disabled
      className="flex h-10 w-full flex-row items-center justify-between rounded-sm px-1"
    >
      <div className="flex flex-col">
        <div className="mb-1 h-4 w-26 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-600"></div>
        <div className="h-3.5 w-18 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="h-3.5 w-8 animate-pulse items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-600"></div>
    </button>
  );
}

export default function LoadingPlaylist() {
  return (
    <div className="border-tertiary flex w-full flex-col border-t-[1px] p-6 md:w-[50%] md:border-t-0 md:border-l-[1px]">
      <h3 className="text-lg font-semibold">Playlist</h3>
      <div className="mt-4 flex w-full flex-col gap-1 pr-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <LoadingPlayListItem key={i} />
        ))}
      </div>
    </div>
  );
}
