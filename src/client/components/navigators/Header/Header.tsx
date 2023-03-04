import type { FC } from 'react';
import { useContext } from 'react';

import { useAuthUser } from '../../../hooks/useAuthUser';
import { ModalContext } from '../../../store/modal';
import { Anchor } from '../../foundation/Anchor';
import { Icon } from '../../foundation/Icon';
import { Image } from '../../foundation/Image';

import * as styles from './Header.styles';

export const Header: FC = () => {
  const [, dispatch] = useContext(ModalContext);
  const { isAuthUser } = useAuthUser();
  const handleOpenModal = () => {
    dispatch({ key: 'SIGN_IN', type: 'OPEN' });
  };

  return (
    <header className={styles.container()}>
      <Anchor href="/">
        <div className={styles.logo()}>
          <Image src="/icons/logo.svg" />
        </div>
      </Anchor>
      {isAuthUser ? (
        <Anchor dataTestId="navigate-order" href={'/order'}>
          <div className={styles.orderLink()}>
            <Icon color="#222222" height={20} type="FaShoppingCart" width={20} />
          </div>
        </Anchor>
      ) : (
        <button className={styles.signInButton()} data-testid="navigate-signin" onClick={() => handleOpenModal()}>
          <Icon color="#222222" height={20} type="FaUser" width={20} />
        </button>
      )}
    </header>
  );
};
