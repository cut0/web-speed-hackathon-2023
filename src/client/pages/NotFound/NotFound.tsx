import type { FC } from 'react';
import { useEffect } from 'react';

import { Layout } from '../../components/application/Layout';
import { loadFonts } from '../../utils/load_fonts';

import * as styles from './NotFound.styles';

export const NotFound: FC = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  (document.querySelector('title') as any).textContent = 'ページが見つかりませんでした';

  return (
    <>
      <Layout>
        <div className={styles.container()}>
          <div className={styles.inner()}>
            <p className={styles.mainParagraph()}>ページが存在しません</p>
            <p className={styles.subParagraph()}>Not Found</p>
          </div>
        </div>
      </Layout>
    </>
  );
};
