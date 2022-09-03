import './styles.css';
import { Text } from '../../../Text';
import { Title } from '../../../Title';

type TLine = {
  title: string;
  time: number;
  position: string;
  width: string;
};

export const Line = ({ title, time, position, width }: TLine) => {
  return (
    <div className="container">
      <Text>{title}</Text>
      <div className="main__line">
        <div className="info__line" style={{ marginLeft: position, width }}>
          <span className="time__text">{time}</span>
        </div>
      </div>
    </div>
  );
};
