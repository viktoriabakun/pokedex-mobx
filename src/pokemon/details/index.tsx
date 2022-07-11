import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const PokemonDetails: FC = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery(
    ['pokemon-detail', name],
    () => fetch(`https://pokeapi.co/api/v2/pokemon/${name as string}`).then((res) => res.json()),
    {
      staleTime: 600_000,
    },
  );

  return <div>{!isLoading && JSON.stringify(data)}</div>;
};

export default PokemonDetails;
