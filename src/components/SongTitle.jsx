export default function SongTitle(props) {
  return (
    <div className="flex flex-col">
      <h2 className={props.size === 'small' ? 'text-md' : 'text-2xl font-bold'}>{props.title}</h2>
      <p className={`text-gray-500 ${props.size === 'small' ? 'text-md' : ''}`}>{props.artist}</p>
    </div>
  );
}
