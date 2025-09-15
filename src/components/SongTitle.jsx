export default function SongTitle(props) {
  return (
    <div className="flex flex-col">
      <h2 className={`${props.size === 'small' ? 'text-md' : 'text-2xl font-bold mb-2'} text-left`}>{props.title}</h2>
      <p className={`text-slate-500 ${props.size === 'small' ? 'text-md' : 'mb-4'} text-left`}>{props.artist}</p>
    </div>
  );
}
