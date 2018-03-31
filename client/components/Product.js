import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../store';

const Product = ({ product, categories, deleteProduct }) => {
  return (
    <div className='list-group-item'>
      <h3> {product.name} </h3>
      <h4> Category: {categories.find(category => category.id === product.categoryId).name} </h4>
      <button className='btn btn-sm btn-danger' onClick={() => deleteProduct(product)} > Delete </button>
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