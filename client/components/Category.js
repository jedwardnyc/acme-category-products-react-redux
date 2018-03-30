import React from 'react';
import { connect } from 'react-redux';
import { createProduct, deleteCategory } from '../store';

const Category = ({ category, products, createProduct, deleteCategory }) => {
  if (!category) return null;
  return (
    <div>
      <h1>Category: {category.name}</h1>
      <h3> Products: </h3>
      <ul>
        {
          products.map(product => {
            return <li key={product.id}> {product.name} </li>
          })
        }
      </ul>
      <button onClick={() => createProduct(category)}> Add a Product </button> &nbsp;
      <button onClick={() => deleteCategory(category)}> Delete this Category </button>
    </div>
  )
};

const mapStateToProps = ({ categories, products }, { id }) => {
  return {
    category: categories.find(category => category.id === id*1),
    products: products.filter(product => product.categoryId === id*1)
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createProduct: (category) => dispatch(createProduct(category)),
    deleteCategory: (category) => dispatch(deleteCategory(category, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);