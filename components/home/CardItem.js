import React from 'react';
import Link from 'next/link';
import styles from './CardItem.module.scss';
import { Icon, InlineIcon } from '@iconify/react';
import shoppingCartPlus from '@iconify/icons-carbon/shopping-cart-plus';

export default function CardItem({title,imageUrl,price}) {
    const linkUrl = `/shop/${title}`;
    return (
    //   <div className={styles.wrapper}>
    //     <div className={styles.container}>
    //       <div className={styles.top}>
    //         <img
    //           src='https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg'
    //           alt=''
    //         />
    //       </div>
    //       <div className={styles.bottom}>
    //         <div className={styles.left}>
    //           <div className={styles.details}>
    //             <h1>Chair</h1>
    //             <p>£250</p>
    //           </div>
    //           <div className={styles.buy}>
    //             <i className={styles.material_icons}>add to cart</i>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>

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
            {/* <div className={styles.right}>
        <div className={styles.done}><i className={styles.material_icons}>done</i></div>
        <div className={styles.details}>
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div className={styles.remove}><i className={styles.material_icons}>clear</i></div>
      </div> */}
          </div>
        </div>
        {/* <div className={styles.inside}>
    <div className={styles.icon}><i className={styles.material_icons}>info_outline</i></div>
    <div className={styles.contents}>
      <table>
        <tr>
          <th>Width</th>
          <th>Height</th>
        </tr>
        <tr>
          <td>3000mm</td>
          <td>4000mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </div>
  </div> */}
      </div>
    )
}
