import React, { useEffect, useState } from 'react';
import StoreCard from '../components/StoreCard';
import { getStores } from '../services/storeService';

const HomePage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(getStores());
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      {stores.map(store => <StoreCard key={store.id} store={store} />)}
    </div>
  );
};

export default HomePage;