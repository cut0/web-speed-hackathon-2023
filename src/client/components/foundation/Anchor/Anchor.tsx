import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Anchor.styles';

type Props = { href: string; dataTestId?: string; children: ReactNode };

export const Anchor: FC<Props> = ({ children, dataTestId, href }) => (
  <Link className={styles.container()} data-testid={dataTestId} to={href}>
    {children}
  </Link>
);
