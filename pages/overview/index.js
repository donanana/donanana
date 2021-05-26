import OverView from '../../components/crown/OverView'
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

export default function Overview({shops}) {
  var objFive = [];
  for (var i = 0; i <=4 ; i++) {
    const obj = shops.filter((obj) => obj.cat_id === (i+1));
    objFive[i] = obj.slice(0,5);
  }
  console.log("objFive",objFive);

  return (
    <div>
      <Layout/>
      {objFive.map(function(objFive){
        return <OverView shops={objFive} key={objFive} />;
    })}
    </div>
  );
}
