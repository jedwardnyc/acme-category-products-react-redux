import axios from 'axios';
import faker from 'faker';

const GET_PRODUCTS = 'GET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const fetchProducts = () => {
  return dispatch => {
    return axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch({ type: GET_PRODUCTS, products }))
  };
;}

export const createProduct = (category) => {
  return dispatch => {
    const fakeProduct = { name: faker.commerce.productName(), categoryId: category.id }
    return axios.post('/api/products',  fakeProduct )
      .then(res => res.data)
      .then(product => {
        dispatch({ type: CREATE_PRODUCT, product })
      })
  };
};

export const deleteProduct = (product) => {
  return dispatch => {
    return axios.delete(`/api/products/${product.id}`)
      .then(() => dispatch({ type: DELETE_PRODUCT, product }))
  };
};

const productReducer = (state = [], action) => {
  switch(action.type){
    case GET_PRODUCTS:
      return action.products;
    case CREATE_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.product.id*1)
    case DELETE_CATEGORY:
      return state.filter(product => product.categoryId !== action.category.id*1)
    default:
      return state;
  };
};

export default productReducer;
