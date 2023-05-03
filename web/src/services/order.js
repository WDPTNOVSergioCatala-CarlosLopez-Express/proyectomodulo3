import http from './base-api';
import { useNavigate } from 'react-router-dom';



const create = (orderData) => http.post('/orders', orderData)
  .then((res) => {
    const navigate = useNavigate();
    navigate('/orders');
  })
  .catch(error => {
    console.error(error);
  });

const detail = (id) => http.get(`/cart/${id}`)
  .then((res) => res.data);

  const add = async (cart, quantity) => {
    try {
      const response = await http.patch(`/cart/${cart}/${quantity}`);
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
  create,
  add,
  empty,
  detail
  }


export default cart
