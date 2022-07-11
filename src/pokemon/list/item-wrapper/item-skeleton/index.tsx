import type { FC } from 'react';
import React from 'react';
import Skeleton from './image-skeleton';
import styles from './styles.module.css';

const SkeletonListItem: FC = () => (
  <div className={styles.itemContainer}>
    <Skeleton style={{ width: 96, height: 96 }} />
    <div>
      <Skeleton style={{ width: 120, height: 21 }} />
      <Skeleton style={{ width: 256, height: 21 }} />
    </div>
  </div>
);

export default SkeletonListItem;
