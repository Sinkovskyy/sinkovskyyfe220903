import './styles.css';
import { ReactNode } from 'react';

type TText = {
  children: ReactNode;
};

export const Text = ({ children }: TText) => {
  return <span>{children}</span>;
};
