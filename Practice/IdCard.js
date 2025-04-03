import React from 'react';

const IdCard = ({ idCardDetails }) => {
  return (
    <div className="id-card">
      <h2>ID Card Details</h2>
      <p>Name: {idCardDetails.name}</p>
      <p>College Name: {idCardDetails.collegeName}</p>
      <p>Location: {idCardDetails.location}</p>
    </div>
  );
};

export default IdCard;