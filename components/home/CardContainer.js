import styles from './CardContainer.module.scss';
import CardItem from './CardItem';

export default function MenuContainer({ shops }) {
  // console.log('CardContainer',shops);
  return (
    <div className={styles.homepage}>
      <h1>Shop Page</h1>
      <div className={styles.menuContainer_menu}>
          {shops.map(({name: title, remote_url:imageUrl,cid,price})=>(
              <CardItem key={cid} title={title} imageUrl={imageUrl} price={price} />
              // <CardItem />
              // <CardItem />
              // <CardItem />
              // <CardItem />
              ))}
      </div>
  </div>
  );
}