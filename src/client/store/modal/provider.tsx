import type { FC, ReactNode, Reducer } from 'react';
import { createContext, useReducer } from 'react';

type Action =
  | {
      type: 'OPEN';
      key: 'SIGN_UP' | 'SIGN_IN' | undefined;
    }
  | { type: 'CLOSE' };

type State = { key: 'SIGN_UP' | 'SIGN_IN' | undefined };

const modalInitialState: State = { key: undefined };

export const modalReducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, key: action.key };
    case 'CLOSE':
      return { ...state, key: undefined };
  }
};

export const ModalContext = createContext<[State, (action: Action) => void]>([modalInitialState, () => ({})]);

export const ModalContextContainer: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, modalInitialState);

  return <ModalContext.Provider value={[state, dispatch]}>{children}</ModalContext.Provider>;
};
