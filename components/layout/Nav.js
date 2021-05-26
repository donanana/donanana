import styles from './nav.module.scss';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul className={`${styles.menu} ${styles.cf}`}>
          <li className={styles.logo}>
            <Link href='/'>
              <img src='/favicon.svg' alt='' />
            </Link>
          </li>
          {/* <li>
          <a href=''>Menu item</a>
        </li>
        <li>
          <a href=''>Menu item</a>
        </li> */}
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/overview'>OverView</Link>
          </li>
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <li>
            <a href=''>Category</a>
            <ul className={styles.submenu}>
              <li>
                <Link href='/shop/hats'>Hats</Link>
              </li>
              <li>
                <Link href='/shop/jackets'>Jackets</Link>
              </li>
              <li>
                <Link href='/shop/sneakers'>Sneakers</Link>
              </li>
              <li>
                <Link href='/shop/womens'>Women's</Link>
              </li>
              <li>
                <Link href='/shop/mens'>Men's</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
