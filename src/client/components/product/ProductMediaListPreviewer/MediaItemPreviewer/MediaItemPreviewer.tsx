import type { FC } from 'react';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { getMediaType } from '../../../../utils/get_media_type';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItemPreiewer.styles';

type Props = {
  file: MediaFileFragmentResponse;
};

export const MediaItemPreviewer: FC<Props> = ({ file }) => {
  const type = getMediaType(file.filename);
  console.log(file.filename);

  return (
    <div className={styles.container()}>
      {type === 'image' && <Image fill src={file.filename.replace('.jpg', '.webp')} />}
      {type === 'video' && (
        <video
          autoPlay
          controls
          muted
          playsInline
          className={styles.video()}
          src={file.filename.replace('.mp4', '.webm')}
        />
      )}
    </div>
  );
};
