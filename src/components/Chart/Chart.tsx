import './styles.css';
import { Title } from '../Title';
import { Line } from './components';
import { TGetPositionInPercentage, TData } from './types';

export const Chart = () => {
  const data: TData = [
    { name: 'Landing Page', time: 7.4 },
    { name: 'Configurator', time: 0.2 },
    { name: 'Check-out', time: 7.0 },
    { name: 'Deal', time: 3.8 },
  ];

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
    <>
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
    </>
  );
};
