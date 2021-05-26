import CardContainer from '../../components/crown/CardContainer'
import  Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';

export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop');
  const shops = await response.json();
  
  return{
    props:{
      shops
    }
  }
}

export default function Nav({shops}) {
  const router = useRouter();
  const filterCatId = router.query.cat_id;
  const cat_id = (router.query.cat_id === 'hats' ? 1 : router.query.cat_id === 'jackets' ? 2 : router.query.cat_id === 'sneakers' ? 3 :router.query.cat_id === 'womens' ? 4:5);

  // console.log('filterCatId',filterCatId);
  // console.log('cat_id',cat_id);
  const objDetail = shops.filter((obj) => obj.cat_id === cat_id);

  // console.log('shoooops',shops);
  // console.log('objDetail',objDetail);


  return (
    <div>
      <Layout/>
      <CardContainer key={objDetail[0]} shops={objDetail}/>
    </div>
  );
}
