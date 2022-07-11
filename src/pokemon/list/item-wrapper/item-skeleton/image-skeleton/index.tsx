import type { CSSProperties, FC } from 'react';
import React from 'react';
import styles from './styles.module.css';

interface ISkeleton {
  style: CSSProperties;
}

const Skeleton: FC<ISkeleton> = ({ style }) => <div className={styles.skeleton} style={style} />;

export default Skeleton;
