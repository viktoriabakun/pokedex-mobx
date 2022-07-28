import { createContext, useContext } from 'react';
import AppStore from './app';

interface IStore {
  app: any;
}

const store: IStore = {
  app: AppStore(),
};

export const StoreContext = createContext(store);

export const useStore = (): IStore => useContext(StoreContext);

export default store;
