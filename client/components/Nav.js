import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCategory } from '../store';

const Nav = ({products, categories, createCategory}) => {
  return (
    <div>
      <ul>
        <li><NavLink to='/products'> All Products ({products.length}) </NavLink></li>
        {
          categories.map(category => {
            return (
              <li key={category.id}> 
                <NavLink to={`/categories/${category.id}`}> 
                  {category.name} ({products.filter(product => product.categoryId === category.id).length})
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <button onClick={()=> createCategory()}> Create Category </button>
    </div>
  )
};

const mapStateToProps = ({products, categories}) => {
  return {
    products,
    categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: () => dispatch(createCategory())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);

