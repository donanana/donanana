import React from 'react';
import Link from 'next/link';
import styles from './CardItem.module.scss';
import { Icon, InlineIcon } from '@iconify/react';
import shoppingCartPlus from '@iconify/icons-carbon/shopping-cart-plus';

export default function CardItem({title,imageUrl,price}) {
    const linkUrl = `/shop/${title}`;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.top}>
            <img
              src={imageUrl}
              alt=''
            />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.details}>
                <h1>{title}</h1>
                <p>${price}</p>
              </div>
              <div className={styles.buy}>
                <i className={styles.material_icons}>
                  <Icon icon={shoppingCartPlus} style={{ fontSize: '32px'}} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
