/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import DashboardComponent from './DashboardComponent';

import getFilms from '../../services/DashboardService';

export default function Dashboard() {
  const [films, setFilms] = useState([]);
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getFilms();
      setFilms(data);
    }
    getData();
  }, []);

  function showDetails(film) {
    setDetail(film);
  }

  return (
    <DashboardComponent
      films={films}
      showDetails={showDetails}
      detail={detail}
    />
  );
}
