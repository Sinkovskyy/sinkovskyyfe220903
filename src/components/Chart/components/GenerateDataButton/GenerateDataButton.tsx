import { useEffect } from 'react';
import { Lines } from '../../Chart';
import { TLine } from '../../types';

type TGenerateDataButton = {
  setData: React.Dispatch<React.SetStateAction<TLine[]>>;
};

const AUTO_GENERATING_TIME = 53000;

export const GenerateDataButton = ({ setData }: TGenerateDataButton) => {
  const Events = {
    clickHandler: () => {
      setData(Utils.generateNewData());
    },
  };

  const Utils = {
    generateRandomTime: () => {
      return Math.round(((Math.random() * 100 + 1) / 10) * 1e1) / 1e1;
    },
    generateNewData: function (): TLine[] {
      return Object.entries(Lines).map((line) => ({ name: line[1].name, time: this.generateRandomTime() }));
    },
  };

  useEffect(() => {
    const interval = setInterval(() => Events.clickHandler(), AUTO_GENERATING_TIME);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <button onClick={Events.clickHandler}>Generate data</button>;
};
