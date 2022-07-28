import { observer } from 'mobx-react-lite';
import type { FC } from 'react';
import React from 'react';
import { useStore } from '../stores';
import PokemonList from './list';
import styles from './styles.module.css';

const Pokedex: FC = () => {
  const { app } = useStore();

  const filterPokemon = (e: any) => {
    if (!app.searchQuery.trim()) {
      return true;
    }

    return new RegExp(app.searchQuery, 'i').test(e.name);
  };

  const onSearch = (e: any) => {
    app.onSearchQueryChange(e?.target?.value);
  };

  return (
    <>
      <input
        onChange={onSearch}
        className={styles.input}
        placeholder="Enter the name of a pokedex"
        type="text"
      />
      <PokemonList filter={filterPokemon} />
    </>
  );
};

export default observer(Pokedex);
