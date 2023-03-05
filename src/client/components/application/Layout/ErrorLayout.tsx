import type { FC, ReactNode } from 'react';

import { ErrorFooter } from '../../navigators/Footer';
import { ErrorHeader } from '../../navigators/Header';

import * as styles from './Layout.styles';

type Props = {
  children: ReactNode;
};

export const ErrorLayout: FC<Props> = ({ children }) => (
  <div className={styles.fullContainer()}>
    <ErrorHeader />
    <main className={styles.container()}>{children}</main>
    <ErrorFooter />
  </div>
);
