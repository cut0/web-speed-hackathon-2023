import classNames from 'classnames';
import type { FC } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaShoppingCart, FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  type: 'FaShoppingCart' | 'FaArrowLeft' | 'FaArrowRight' | 'FaCheckCircle' | 'FaPlay' | 'FaUser';
  width: number;
  height: number;
  color: string;
};

const Icons = {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaShoppingCart,
  FaUser,
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  const Icon = Icons[type];
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
