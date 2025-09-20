import { JSX, useEffect, useRef } from "react";

type Props = {
  source: string | undefined;
  playbackSpeed: 0.5 | 1.0 | 2.0;
  playing: boolean;
  volume: number;
  onEnded: () => void;
  title: string | undefined;
};

export default function MusicPlayer(props: Props): JSX.Element {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (props.playing) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [props.playing]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = props.volume;
  }, [props.volume]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.playbackRate = props.playbackSpeed;
  }, [props.playbackSpeed]);

  useEffect(() => {
    if (!ref.current) return;
    if (props.source != null) {
      ref.current.src = props.source;
      if (props.playing) console.log(`Now playing: ${props.title}`);
    }
  }, [props.source, props.title]); // Intentionally not putting props.playing here because that causes a bug. This is a warning, not an error, so I'll leave this

  useEffect(() => {
    const current = ref.current;
    if (!current) return;
    requestAnimationFrame(() => {
      current.playbackRate = props.playbackSpeed;
    });
  }, [props.playbackSpeed, props.source]);

  useEffect(() => {
    const current = ref.current;
    current?.addEventListener("ended", props.onEnded);
    return () => {
      current?.removeEventListener("ended", props.onEnded);
    };
  }, [ref, props.onEnded]);

  return (
    <audio ref={ref} autoPlay={props.playing}>
      <source src={props.source} type="audio/mpeg" />
    </audio>
  );
}
