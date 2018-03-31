import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  return  (
    <div style={{textAlign: 'center'}}>
      <h1>Welcome to the ACME Corp's Product Directory</h1>
      <div className='jumbotron'>
        <h6> 
          We strive for greatness as far as inventory is concerned,
          so we in turn made a great inventory app. This will not only
          categorize all products, but also keep a running tab of them
          and let us know how many there are of each product. 
        </h6>
        <br />
        <h5>Click <Link to='/products'>HERE</Link> for all the products</h5>
      </div>
    </div>
  )
};

export default connect()(Home);