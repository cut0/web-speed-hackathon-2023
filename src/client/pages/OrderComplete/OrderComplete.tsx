import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components/application/Layout';
import { AspectRatio } from '../../components/foundation/AspectRatio';
import { PrimaryAnchor } from '../../components/foundation/PrimaryAnchor';
import { WidthRestriction } from '../../components/foundation/WidthRestriction';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { useAuthUser } from '../../hooks/useAuthUser';
import { useRecommendation } from '../../hooks/useRecommendation';
import { loadFonts } from '../../utils/load_fonts';

import * as styles from './OrderComplete.styles';

export const OrderComplete: FC = () => {
  const navigate = useNavigate();
  const { authUserLoading, isAuthUser } = useAuthUser();
  const { recommendation } = useRecommendation();

  useEffect(() => {
    loadFonts();
  }, []);

  if (!recommendation || authUserLoading) {
    return null;
  }
  if (!isAuthUser) {
    navigate('/');
    return null;
  }

  (document.querySelector('title') as any).textContent = '購入が完了しました';

  return (
    <>
      <Layout>
        <WidthRestriction>
          <div className={styles.container()}>
            <div className={styles.notice()}>
              <h2 className={styles.noticeHeading()}>購入が完了しました</h2>
              <AspectRatio ratioHeight={1} ratioWidth={2}>
                <div className={styles.noticeDescriptionWrapper()}>
                  <p className={styles.noticeDescription()}>
                    このサイトは架空のサイトであり、商品が発送されることはありません
                  </p>
                </div>
              </AspectRatio>
            </div>

            <div className={styles.recommended()}>
              <h2 className={styles.recommendedHeading()}>こちらの商品もオススメです</h2>
              <ProductHeroImage product={recommendation.product} title={recommendation.product.name} />
            </div>

            <div className={styles.backToTopButtonWrapper()}>
              <PrimaryAnchor href="/" size="lg">
                トップへ戻る
              </PrimaryAnchor>
            </div>
          </div>
        </WidthRestriction>
      </Layout>
    </>
  );
};
