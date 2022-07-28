import { observer } from 'mobx-react-lite';
import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { listFetcher } from '../../api';
import PokemonListItemWrapper from './item-wrapper';
import styles from './styles.module.css';

interface IPokemonList {
  filter: (e: any) => void;
}

const PokemonList: FC<IPokemonList> = ({ filter }: any) => {
  const { data, isLoading } = useQuery('pokemon-list', listFetcher(), {
    staleTime: 600_000,
  });

  return (
    <div>
      {!isLoading &&
        data.results.filter(filter).map((e: any) => (
          <Link key={e.name} to={`/details/${e.name as string}`} className={styles.pokemonLink}>
            <PokemonListItemWrapper {...e} />
          </Link>
        ))}
    </div>
  );
};

export default observer(PokemonList);
