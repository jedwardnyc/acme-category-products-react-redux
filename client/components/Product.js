import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../store';

const Product = ({ product, categories, deleteProduct }) => {
  console.log(product)
  return (
    <div>
      <h3> {product.name} </h3>
      <h4> category: {categories.find(category => category.id === product.categoryId).name} </h4>
      <button onClick={() => deleteProduct(product)} > Delete </button>
    </div>
  )
};

const mapStateToProps = ({ products, categories }, { id }) => {
  return {
    product: products.find(product => product.id === id*1 ),
    categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);