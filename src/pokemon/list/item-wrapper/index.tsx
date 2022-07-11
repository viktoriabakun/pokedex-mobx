import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import PokemonListItem from './item';
import SkeletonListItem from './item-skeleton';

interface IPokemonListItem {
  name: string;
  url: string;
}

const PokemonListItemWrapper: FC<IPokemonListItem> = ({ name, url }) => {
  const { data, isLoading } = useQuery(
    ['pokemon-detail', name],
    () => fetch(url).then((res) => res.json()),
    {
      staleTime: 600_000,
    },
  );

  return <div>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</div>;
};

export default PokemonListItemWrapper;
