export default function SongTitle(props) {
  return (
    <div className="flex flex-col">
      <h2
        className={`${props.size === "small" ? "text-sm font-[500]" : "text-line mb-2 text-2xl/8 font-bold"} text-left`}
      >
        {props.title}
      </h2>
      <p
        className={`dark:text-dark-muted text-muted ${props.size === "small" ? "text-sm font-[500]" : "mb-4"} text-left`}
      >
        {props.artist}
      </p>
    </div>
  );
}
