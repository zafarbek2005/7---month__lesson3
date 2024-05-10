import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"

function Users({data}) {
  console.log(data);
  return (
    <div className='users__wrapper'>
      {
        data?.map(user => 
          <div className="users__card">
          <img src={male} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profesion}</p>
          <p>{user.age}</p>
          <button>Remove</button>
      </div>

        )
      }
    
    </div>
  )
}

export default Users