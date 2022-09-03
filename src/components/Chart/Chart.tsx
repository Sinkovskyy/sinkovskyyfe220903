import './styles.css';
import { useState } from 'react';

import { Title } from '../Title';
import { GenerateDataButton, Line } from './components';
import { TGetPositionInPercentage, TLine } from './types';

export const Lines = {
  landingPage: {
    name: 'Landing Page',
  },
  configurator: {
    name: 'Configurator',
  },
  checkOut: {
    name: 'Check-out',
  },
  deal: {
    name: 'Deal',
  },
};

export const Chart = () => {
  const [data, setData] = useState<TLine[]>([
    { name: Lines.landingPage.name, time: 7.4 },
    { name: Lines.configurator.name, time: 0.2 },
    { name: Lines.checkOut.name, time: 7.0 },
    { name: Lines.deal.name, time: 3.8 },
  ]);

  const Utils = {
    totalTime: (): number => {
      return data.reduce((prevLine, line) => prevLine + line.time, 0);
    },
    getPositionInPercentage: function ({ index }: TGetPositionInPercentage): string {
      const total = this.totalTime();
      const lineValue = data.slice(0, index).reduce((prev, current) => prev + current.time, 0);

      return `${(lineValue / total) * 100}%`;
    },
    getWidthInPercentage: function ({ index }: TGetPositionInPercentage): string {
      const total = this.totalTime();

      return `${(data[index].time / total) * 100}%`;
    },
  };

  return (
    <div className="list">
      <Title>SPENT TIME (SECONDS)</Title>
      <div className="list">
        {data.map((data, index) => (
          <Line
            key={index}
            title={data.name}
            time={data.time}
            width={Utils.getWidthInPercentage({ index })}
            position={Utils.getPositionInPercentage({ index })}
          />
        ))}
      </div>
      <GenerateDataButton setData={setData} />
    </div>
  );
};
