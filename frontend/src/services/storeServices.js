const mockStores = [
    { id: 1, name: 'Coffee Express', rating: 4, description: 'Great coffee and ambiance.' },
    { id: 2, name: 'Tech Gadgets', rating: 5, description: 'Latest gadgets available here.' }
  ];
  
  export const getStores = () => mockStores;
  
  export const getStoreById = (id) => mockStores.find(store => store.id === id);