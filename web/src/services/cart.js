import http from './base-api';

const add = (id, amount) => http.patch(`/cart/${id}/${amount}`)
  .then((res) => res.data);

const update = (id) => http.patch(`/products/${id}`)
  .then((res) => res.data);

const remove = (id) => http.delete(`/products/${id}`)
  .then((res) => res.data);

const listCategories = () => http.get('/categories')
  .then((res) => res.data)

 const products = {
  add,
  update,
  remove,
  listCategories
}


export default products
