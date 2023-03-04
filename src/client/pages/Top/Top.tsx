import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '../../components/application/Layout';
import { ProductList } from '../../components/feature/ProductList';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { useFeatures } from '../../hooks/useFeatures';
import { useRecommendation } from '../../hooks/useRecommendation';

import * as styles from './Top.styles';

export const Top: FC = () => {
  const { recommendation } = useRecommendation();
  const { features } = useFeatures();
  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <Layout>
        <div>
          {recommendation && <ProductHeroImage product={recommendation.product} title="今週のオススメ" />}

          <div className={styles.featureList()}>
            {features &&
              features.map((featureSection) => {
                return (
                  <div key={featureSection.id} className={styles.feature()}>
                    <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
                    <ProductList featureSection={featureSection} />
                  </div>
                );
              })}
          </div>
        </div>
      </Layout>
    </>
  );
};
