import type { FC } from 'react';
import React from 'react';
import styles from './styles.module.css';

interface IPokemonListItem {
  data: any;
}

const PokemonListItem: FC<IPokemonListItem> = ({ data }: any) => (
  <div className={styles.itemContainer}>
    <div>
      <img src={data.sprites.front_default} alt="pokemon" width="96" height="96" />
    </div>
    <div className={styles.itemContent}>
      <div>
        #{data.id} <strong>{data.names.find((o: any) => o.language.name === 'en').name}</strong>
      </div>
      <div>Types: {data.types.map((t: any) => t.type.name as string).join(', ')}</div>
    </div>
  </div>
);

export default PokemonListItem;
