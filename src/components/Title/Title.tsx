import './styles.css';
import { ReactNode } from 'react';

type TTitle = {
  children: ReactNode;
};

export const Title = ({ children }: TTitle) => {
  return <h1>{children}</h1>;
};
