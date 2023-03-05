import type { FC } from 'react';

import { ErrorLayout } from '../../components/application/Layout';

import * as styles from './Fallback.styles';

export const Fallback: FC = () => {
  (document.querySelector('title') as any).textContent = 'エラーが発生しました';

  return (
    <>
      <ErrorLayout>
        <div className={styles.container()}>
          <div className={styles.inner()}>
            <p className={styles.mainParagraph()}>エラーが発生しました</p>
            <p className={styles.subParagraph()}>Some error has occurred</p>
          </div>
        </div>
      </ErrorLayout>
    </>
  );
};
