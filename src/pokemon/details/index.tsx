import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { detailFetcher } from '../../api';

const PokemonDetails: FC = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery(['pokemon-detail', name], detailFetcher(name ?? ''), {
    staleTime: 600_000,
  });

  return <div>{!isLoading && JSON.stringify(data)}</div>;
};

export default PokemonDetails;
