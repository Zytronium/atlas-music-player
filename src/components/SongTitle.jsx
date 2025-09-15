export default function SongTitle(props) {
  return (
    <div className="flex flex-col">
      <h2 className={`${props.size === 'small' ? 'text-sm font-[500]' : 'text-2xl/8 font-bold mb-2 text-line'} text-left`}>{props.title}</h2>
      <p className={`text-slate-500 ${props.size === 'small' ? 'text-sm font-[500]' : 'mb-4'} text-left`}>{props.artist}</p>
    </div>
  );
}
