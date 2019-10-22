import 'babel-polyfill';
import Api from '../config/api';
import DashboardModel from '../models/DashboardModel';

export default async function getFilms() {
  return new Promise((resolve, reject) => {
    Api.get('/films')
      .then(response => {
        const data = response.data.results.map(
          item => new DashboardModel(item),
        );
        return resolve(data);
      })
      .catch(error => {
        return reject(error);
      });
  });
}
