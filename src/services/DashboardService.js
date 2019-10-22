import 'babel-polyfill';
import Api from '../config/api';

export async function getFilms() {
  const response = await Api.get('/films');
  return response.data;
}

export async function getFilms2() {
  const response = await Api.get('/films');
  return response.data;
}
