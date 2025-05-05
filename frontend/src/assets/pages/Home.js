import React, { useEffect, useState } from 'react';
import StoreCard from '../components/StoreCard';
import { fetchStores } from '../services/api';

const Home = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores().then(data => setStores(data));
  }, []);

  return (
    <div>
      <h1>Store Ratings</h1>
      {stores.map(store => (
        <StoreCard key={store._id} store={store} />
      ))}
    </div>
  );
};

export default Home;
