import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCategory } from '../store';

const Nav = ({products, categories, createCategory}) => {
  return (
    <nav style={{marginBottom: '20px'}} className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand">Home</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          {
            categories.map(category => {
              return (
                <Link key={category.id} to={`/categories/${category.id}`}> 
                  {category.name} ({products.filter(product => product.categoryId === category.id).length})&nbsp; 
                </Link>
              )
            })
          }
        </li>
      </ul>
      <Link style={{paddingRight: '20px'}} to='/products'>All Products </Link>
      <button className="btn btn-sm btn-primary" onClick={()=> createCategory()}> Create Category </button> 
    </nav>
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

