import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { detailFetcher } from '../../../api';
import PokemonListItem from './item';
import SkeletonListItem from './item-skeleton';

interface IPokemonListItemWrapper {
  name: string;
}

const PokemonListItemWrapper: FC<IPokemonListItemWrapper> = ({ name }) => {
  const { data, isLoading } = useQuery(['pokemon-detail', name], detailFetcher(name), {
    staleTime: 600_000,
  });

  return <div>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</div>;
};

export default PokemonListItemWrapper;
