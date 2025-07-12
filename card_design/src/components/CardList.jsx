import React from 'react';
import './CardList.css';

const users = [
  { id: 1, name: 'Afsha Mulla', role: 'Frontend Developer' },
  { id: 2, name: 'Riya Shah', role: 'Backend Developer' },
  { id: 3, name: 'Sneha Patil', role: 'Full Stack Developer' },
];

const CardList = () => {
  return (
    <div className="text-card-container">
      {users.map((user) => (
        <div key={user.id} className="text-card">
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <button className="text-card-btn">View Profile</button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
