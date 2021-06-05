import CardContainer from '../../components/crown/CardContainer'
import Link from 'next/link';
import  Layout from '../../components/layout/Layout';

export async function getServerSideProps(){
  const response = await fetch('https://web-final-110.herokuapp.com/categories');
  const shops = await response.json();

  return{
    props:{
      shops
    }
  }
}

export default function Shop({shops}) {
  // console.log('shops',shops);
  return (
    <div>
      <Layout/>
      <CardContainer key={shops[0]} shops={shops}/>
    </div>
  );
}
