import styles from './CardContainer.module.scss';
import CardItem from './CardItem';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function CardContainer({ shops }) {
  // console.log('CardContainer',shops);
  const router = useRouter();
  let title = (typeof router.query.cat_id === "undefined" ? 'shop' : router.query.cat_id);
  let upper= title[0].toUpperCase() + title.slice(1)
  // console.log('title',title);

  //
  const[pageNumber,setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayShops = shops.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }
  const pageCount = Math.ceil(shops.length / itemsPerPage);

  return (
    <div className={styles.homepage}>
      <h1>{upper} Page</h1>
      <div className={styles.menuContainer_menu}>
          {displayShops.map(({name: title, remote_url:imageUrl,cid,price})=>(
              <CardItem key={cid} title={title} imageUrl={imageUrl} price={price} />
              ))}
      </div>
      <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={styles.paginateButton}
      previousLinkClassName={styles.previousButton}
      nextLinkClassName={styles.nextButton}
      disableClassName={styles.paginateDisable}
      activeClassName={styles.paginateActive}
      />
  </div>
  );
}