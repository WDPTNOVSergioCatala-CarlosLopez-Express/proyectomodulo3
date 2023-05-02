import http from './base-api';

const list = () => http.get(`/cart`)
  .then((res) => res.data);

const update = (productId, quantity) => http.patch(`/products/${productId}/${quantity}`)
  .then((res) => res.data);

const empty = () => http.post(`/cart/empty`)
  .then((res) => res.data);

 const cart = {
  list,
  update,
  empty,
  }


export default cart
