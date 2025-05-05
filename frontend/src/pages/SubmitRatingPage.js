import React, { useState } from 'react';

const SubmitRatingPage = () => {
  const [storeName, setStoreName] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted rating ${rating} for ${storeName}`);
    // Replace with API call or logic to save rating
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Rating</h2>
      <input type="text" placeholder="Store name" value={storeName} onChange={e => setStoreName(e.target.value)} required />
      <input type="number" min="1" max="5" value={rating} onChange={e => setRating(Number(e.target.value))} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitRatingPage;