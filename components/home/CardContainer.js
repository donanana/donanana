import styles from './CardContainer.module.scss';
import CardItem from './CardItem';
import { useRouter } from 'next/router';

export default function MenuContainer({ shops }) {
  // console.log('CardContainer',shops);
  const router = useRouter();
  let title = (typeof router.query.cat_id === "undefined" ? 'shop' : router.query.cat_id);
  let upper= title[0].toUpperCase() + title.slice(1)
  // console.log('title',title);

  return (
    <div className={styles.homepage}>
      <h1>{upper} Page</h1>
      <div className={styles.menuContainer_menu}>
          {shops.map(({name: title, remote_url:imageUrl,cid,price})=>(
              <CardItem key={cid} title={title} imageUrl={imageUrl} price={price} />
              ))}
      </div>
  </div>
  );
}