import React, { useState } from 'react';
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from 'react-redux';
import { removeUser } from '../../context/UserSlice';

function Users({data}) {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  const openDetailsModal = (user) => {
    setSelectedUser(user);
  };

  const closeDetailsModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className='users__wrapper'>
      {
        data?.map(user => 
          <div className="users__card" key={user.id}>
            <img src={user.gender === "male" ? male : female} alt="" />
            <h2>{user.name}</h2>
            <p>{user.profession}</p>
            <p>{user.age}</p>
            <button onClick={() => dispatch(removeUser(user))}>Remove</button>  
            <button id='madal' onClick={() => openDetailsModal(user)}>Details</button>
          </div>
        )
      }

      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeDetailsModal}>&times;</span>
            <h2>{selectedUser.name}'s Details</h2>
            <p><strong>Profession:</strong> {selectedUser.profession}</p>
            <p><strong>Age:</strong> {selectedUser.age}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
