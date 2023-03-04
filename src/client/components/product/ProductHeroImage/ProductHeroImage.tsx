import { memo } from 'react';
import type { FC } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';
import { AspectRatio } from '../../foundation/AspectRatio';
import { WidthRestriction } from '../../foundation/WidthRestriction';

import * as styles from './ProductHeroImage.styles';

type Props = {
  product: ProductFragmentResponse;
  title: string;
};

export const ProductHeroImage: FC<Props> = memo(({ product, title }) => {
  const thumbnailFile = product.media.find((productMedia) => productMedia.isThumbnail)?.file;

  if (thumbnailFile === undefined) {
    return null;
  }

  return (
    <WidthRestriction>
      <Anchor href={`/product/${product.id}`}>
        <div className={styles.container()}>
          <AspectRatio ratioHeight={9} ratioWidth={16}>
            <img className={styles.image()} height={9} src={thumbnailFile.filename.replace('jpg', 'webp')} width={16} />
          </AspectRatio>

          <div className={styles.overlay()}>
            <p className={styles.title()}>{title}</p>
            <p className={styles.description()}>{product.name}</p>
          </div>
        </div>
      </Anchor>
    </WidthRestriction>
  );
});

ProductHeroImage.displayName = 'ProductHeroImage';
