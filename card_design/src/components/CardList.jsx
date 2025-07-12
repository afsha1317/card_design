import React, { useState } from 'react';
import './CardList.css';

const users = [
  {
    id: 1,
    name: 'Afsha Mulla',
    role: 'Frontend Developer',
    email: 'afsha@example.com',
    department: 'Computer Science',
  },
  {
    id: 2,
    name: 'Riya Shah',
    role: 'Backend Developer',
    email: 'riya@example.com',
    department: 'Information Technology',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    role: 'Full Stack Developer',
    email: 'sneha@example.com',
    department: 'Software Engineering',
  },
];

const CardList = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="new-card-container">
      {users.map((user) => (
        <div key={user.id} className="new-card">
          <div className="avatar-placeholder">
            {user.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <button className="card-btn" onClick={() => handleViewProfile(user)}>
            View Profile
          </button>
        </div>
      ))}

      {selectedUser && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedUser.name}</h2>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Department:</strong> {selectedUser.department}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
