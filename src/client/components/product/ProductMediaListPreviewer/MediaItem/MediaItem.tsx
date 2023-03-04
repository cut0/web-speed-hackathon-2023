import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { getMediaType } from '../../../../utils/get_media_type';
import { Icon } from '../../../foundation/Icon';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItem.styles';

type Props = {
  file: MediaFileFragmentResponse;
};

export const MediaItem: FC<Props> = ({ file }) => {
  const mediaType = getMediaType(file.filename);

  return (
    <div className={styles.container()}>
      {mediaType === 'image' && <Image fill src={file.filename.replace('.jpg', '.webp')} />}
      {mediaType === 'video' && (
        <>
          <Image fill src={file.filename.replace('.mp4', '.webp')} />
          <div className={styles.playIcon()}>
            <Icon color="#ffffff" height={16} type="FaPlay" width={16} />
          </div>
        </>
      )}
    </div>
  );
};
