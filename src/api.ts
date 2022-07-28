export const BASE_URL = 'https://pokeapi.co/api/v2';

export const detailFetcher = (name: string) => async (): Promise<any> => {
  const details = await fetch(`${BASE_URL}/pokemon/${name}`).then((res) => res.json());
  const species = await fetch(details.species.url).then((res) => res.json());

  //@TODO: TS
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return { ...details, names: species.names };
};

export const listFetcher = () => (): Promise<any> =>
  fetch(`${BASE_URL}/pokemon?limit=100&offset=0`).then((res) => res.json());
