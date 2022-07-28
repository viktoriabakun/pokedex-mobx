import { makeAutoObservable } from 'mobx';

const AppStore: any = () =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  makeAutoObservable({
    searchQuery: '',
    onSearchQueryChange(value: string) {
      this.searchQuery = value;
    },
  });

export default AppStore;
