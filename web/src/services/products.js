import http from './base-api';

const list = (query) => http.get('/products', { params: query })
  .then((res) => res.data);

const detail = (id) => http.get(`/products/${id}`)
  .then((res) => res.data);

const create = (product) => http.post('/products', product)
  .then((res) => res.data);

const update = (id) => http.patch(`/products/${id}`)
  .then((res) => res.data);

const remove = (id) => http.delete(`/products/${id}`)
  .then((res) => res.data);

 const products = {
  list,
  detail,
  create,
  update,
  remove,
}


export default products
