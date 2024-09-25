import { Dispatch, SetStateAction, useEffect } from 'react';

type Props = {
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
};

export default function CountdownTimer({ timer, setTimer }: Props) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((time) => (time > 0 ? time - 1 : time));
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer]);

  function formatTimer(time: number) {
    const minutes = Math.floor(time / 60);
    const timeLeft = Math.floor(time % 60);

    const seconds = timeLeft;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
  }

  function formatNumber(number: number) {
    return number <= 9 ? `0${number}` : number;
  }

  return <div>{formatTimer(timer)}s</div>;
}
