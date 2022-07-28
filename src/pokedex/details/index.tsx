import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { detailFetcher } from '../../api';
import PokemonListItem from '../list/item-wrapper/item';
import styles from './styles.module.css';

const PokemonDetails: FC = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery(['pokemon-detail', name], detailFetcher(name ?? ''), {
    staleTime: 600_000,
  });

  return (
    <>
      <Link to="/" className={styles.navBar}>
        &lt; Back to the Pokedex
      </Link>
      {!isLoading && <PokemonListItem data={data} />}
    </>
  );
};

export default PokemonDetails;
