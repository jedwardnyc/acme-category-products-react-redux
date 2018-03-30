import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../store';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Categories from './Categories';
import Category from './Category';

class App extends Component {
 
  componentWillMount(){
    this.props.fetchCategories();
    this.props.fetchProducts();
  };

  render(){
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <div>
              <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/products' exact component={ Products } />
                <Route path='/products/:id' render={( { match } ) => <Product id={ match.params.id }/> } />
                <Route path='/categories' exact component={ Categories } />
                <Route path='/categories/:id' render={( { match, history } ) => <Category id={ match.params.id } history={history}/> } />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
};

const mapState = null;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories())
  }
};

export default connect(mapState, mapDispatchToProps)(App);