import React from 'react';
import { connect }  from 'react-redux';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div>
      <h1> All {products.length} Products: </h1>
      <ul>
      {
        products.map(product => {
          return <Product key={product.id} id={product.id}/>
        })
      }
      </ul>
    </div>
  )
};

const mapStateToProps = ({products}) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Products);