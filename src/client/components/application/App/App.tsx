import type { FC } from 'react';

import { ModalContextContainer } from '../../../store/modal';
import { SignInModal } from '../../modal/SignInModal';
import { SignUpModal } from '../../modal/SignUpModal';
import { Providers } from '../Providers';
import { Routes } from '../Routes';

export const App: FC = () => (
  <Providers>
    <ModalContextContainer>
      <>
        <Routes />
        <SignInModal />
        <SignUpModal />
      </>
    </ModalContextContainer>
  </Providers>
);
