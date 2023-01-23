import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps extends LinkProps {
  isOutside?: boolean;
  children: ReactNode;
  ariaLabel?: string;
}

function Link({
  isOutside,
  children,
  ariaLabel,
  ...rest
}: IProps) {
  return (
    <NextLink
      rel={isOutside ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      {...rest}
    >
      <span className={styles.linkWrapper}>
        {children}
      </span>
    </NextLink>
  );
}

export default Link;
