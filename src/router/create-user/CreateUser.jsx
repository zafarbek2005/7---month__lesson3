import React, { useState } from 'react';
import './CreateUser.css';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../context/UserSlice';

function CreateUser() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    const newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gender,
    };


    dispatch(addUsers(newUser));

    
    setName('');
    setProfession('');
    setAge('');
    setGender('');
  };

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSumbit} className='create__user-form'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          required
        />
        <input
          type='text'
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          placeholder='Profession'
          required
        />
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Age'
          required
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value=''>Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
