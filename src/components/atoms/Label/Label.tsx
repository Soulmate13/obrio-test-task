import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type TOptions = {
  type: 'status',
  variant: 'online' | 'offline' | 'busy'
} | {
  type: 'specialization'
}

interface IProps {
  options: TOptions;
  children: ReactNode;
}

function Label({ options, children }: IProps) {
  const additionalClassNames = options.type === 'status' ? clsx(styles[options.variant]) : false;

  return (
    <span className={clsx(
      styles.label,
      styles[options.type],
      additionalClassNames
    )}>
      {children}
    </span>
  );
}

export default Label;
