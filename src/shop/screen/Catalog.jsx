import { Link } from 'react-router-dom';
import { items } from './Items.jsx';
import Rating from './Rating.jsx';
import Screen from './Screen.jsx';


export default function CatalogScreen(){
  return <Screen className='catalog'>
    <div className='product_list'>
      <div className='product_filter'>
        <h1>Products</h1>
        <img src="/img/filter.svg" alt="filter" />
      </div>
      <List />
    </div>
  </Screen>
}


export function List() {
  return <div className='row row-cols-2 g-3'>
    { items.map(el =>  
      <div className='col' key={el.id}> 
        <Product el={el} />
      </div>
    )}
  </div>;
}

export function Product({el}){
  return <Link to={'/product/' + el.id } className='product'>
  <div className='photocard'><img alt={el.name} src={el.photo}/></div> 
  <div className='product_description'>    
    <p className='name'> {el.name} </p>
    <p className='price'> ${el.price.toFixed(2)} </p>
    <Rating value={el.opinion} />
  </div>
</Link>
}

