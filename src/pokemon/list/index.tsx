import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { listFetcher } from '../../api';
import PokemonListItemWrapper from './item-wrapper';

const PokemonList: FC = () => {
  const { data, isLoading } = useQuery('pokemon-list', listFetcher(), {
    staleTime: 600_000,
  });

  return (
    <div>
      {!isLoading &&
        data.results.map((e: any) => (
          <PokemonListItemWrapper key={e.name} name={e.name} url={e.url} />
        ))}
    </div>
  );
};

export default PokemonList;
