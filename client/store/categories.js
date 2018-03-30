import axios from 'axios';
import faker from 'faker';

const GET_CATEGORIES = 'GET_CATEGORIES';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const CREATE_PRODUCT = 'CREATE_PRODUCT';

export const fetchCategories = () => {
  return dispatch => {
    return axios.get('/api/categories')
      .then(res => res.data)
      .then(categories => dispatch({ type: GET_CATEGORIES, categories }))
  };
};

export const createCategory = () => {
  return dispatch => {
    const category =  { name: `${faker.commerce.productAdjective()} ${faker.commerce.department()}` }
    return axios.post('/api/categories', category)
      .then(res => res.data)
      .then(category => dispatch({ type: CREATE_CATEGORY, category }))
      .catch(err => console.log(err.response))
  };
};

export const deleteCategory = (category, history) => {
  return dispatch => {
    return axios.delete(`/api/categories/${category.id}`)
      .then(() => dispatch({ type: DELETE_CATEGORY, category }))
      .then(() => history.push('/products'))
      .catch(err => console.log(err.response))
  };
};

const categoryReducer = (state = [], action) => {
  switch(action.type){
    case GET_CATEGORIES:
      return action.categories;
    case CREATE_CATEGORY:
      return [...state, action.category];
    case DELETE_CATEGORY:
      return state.filter(category => category.id !== action.category.id*1);
    default:
      return state;
  };
};

export default categoryReducer;