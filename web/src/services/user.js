import http from './base-api';

const create = (user) => http.post('/register', user)
  .then((res) => res.data);

const login = (user) => http.post('/login', user)
  .then((res) => res.data);

const detail = (id) => http.get(`/users/${id}`)
  .then((res) => res.data);

const update = (id, user) => http.put(`/users/${id}`, user)
  .then((res) => res.data);

export default {
  create,
  login,
  detail,
  update
}