import type { FC } from 'react';

import { ModalContextContainer } from '../../../store/modal';
import { SignInModal } from '../../modal/SignInModal';
import { SignUpModal } from '../../modal/SignUpModal';
import { Providers } from '../Providers';
import { AppRoutes } from '../Routes';

export const App: FC = () => (
  <Providers>
    <ModalContextContainer>
      <>
        <AppRoutes />
        <SignInModal />
        <SignUpModal />
      </>
    </ModalContextContainer>
  </Providers>
);
