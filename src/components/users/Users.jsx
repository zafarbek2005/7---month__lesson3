import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useDispatch } from 'react-redux'
import { removeUser } from '../../context/UserSlice'

function Users({data}) {
  const dispatch = useDispatch()
  return (
    <div className='users__wrapper'>
      {
        data?.map(user => 
          <div className="users__card" key={user.id}>
          <img src={user.gender === "male" ? male :female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profesion}</p>
          <p>{user.age}</p>
          <button onClick={() =>dispatch(removeUser(user))} >Remove</button>
      </div>

        )
      }
    
    </div>
  )
}

export default Users