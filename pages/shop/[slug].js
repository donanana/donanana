import CardContainer from '../../components/home/CardContainer'
import Link from 'next/link';
import  Layout from '../../components/layout/Layout';

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
  console.log('shops',shops);
  return (
    <div>
      <Layout/>
      <CardContainer key={shops[0]} shops={shops}/>
    </div>
  );
}
