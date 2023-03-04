import classNames from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { AspectRatio } from '../../foundation/AspectRatio';

import { MediaItem } from './MediaItem';
import { MediaItemPreviewer } from './MediaItemPreviewer';
import * as styles from './ProductMediaListPreviewer.styles';

type Props = {
  product: ProductFragmentResponse | undefined;
};

export const ProductMediaListPreviewer: FC<Props> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.container()}>
      <AspectRatio ratioHeight={9} ratioWidth={16}>
        {product && <MediaItemPreviewer file={product.media[activeIndex].file} />}

        {product === undefined && (
          <>
            <div className={styles.heroSkeleton()}></div>
            <div className={styles.icons()}></div>
          </>
        )}
      </AspectRatio>
      <div className={styles.itemListWrapper()}>
        <ul className={styles.itemList()}>
          {product &&
            product.media.length !== 0 &&
            product.media.map((media, index) => {
              const disabled = index === activeIndex;

              return (
                <li key={media.id} className={styles.item()}>
                  <AspectRatio ratioHeight={1} ratioWidth={1}>
                    <button
                      className={classNames(styles.itemSelectButton(), {
                        [styles.itemSelectButton__disabled()]: disabled,
                      })}
                      disabled={disabled}
                      onClick={() => setActiveIndex(index)}
                    >
                      <MediaItem file={media.file} />
                    </button>
                  </AspectRatio>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
