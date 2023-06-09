import http from './base-api';

const list = () => http.get(`/cart`)
  .then((res) => res.data);

const detail = (id) => http.get(`/cart/${id}`)
  .then((res) => res.data);

  const add = async (productId, quantity) => {
    try {
      const response = await http.patch(`/cart/${productId}/${quantity}`);
      const updatedCart = response.data;
      return updatedCart;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  

const empty = () => http.post(`/cart/empty`)
  .then((res) => res.data);

 const cart = {
  list,
  add,
  empty,
  detail
  }


export default cart
