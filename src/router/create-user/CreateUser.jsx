import React,{useState} from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addUsers } from '../../context/UserSlice'
function CreateUser() {
  const [name,setname] = useState(" ")
  const [profesion,setprofesion] = useState(" ")
  const [age,setage] = useState("")
  const [gender,setgender] = useState(" ")

  const handleSumbit = (e) => {
    e.preventDefault()
  }
  let dipatch = useDispatch()
  let NewUser = {
    id: new Date().getTime(),
    name,
    profesion,
    age: +age,
    gender
  }
  dipatch(addUsers(NewUser))
  
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSumbit} className='create__user-form'>
        <input type="text"
         value={name} onChange={(e) => setname(e.target.value)}
          placeholder='name' />
        <input type="text" 
        value={profesion} onChange={(e) =>  setprofesion(e.target.value)} 
        placeholder='profession' />
        <input type="number" placeholder='age'
         value={age}
         onChange={(e) => setage(e.target.value)}
         />
        <select value={gender} 
        onChange={(e) => setgender(e.target.value)} 
         name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser