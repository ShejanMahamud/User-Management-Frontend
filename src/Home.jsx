import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

const handleUserSubmit = (e) => {{
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;

    const user = {name,email}

    fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        alert('Added Successfully');
        e.target.reset()
    })
}}

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <form onSubmit={handleUserSubmit} className='flex items-center justify-center flex-col gap-5'>
            <input type="text" name="email" placeholder='Enter email' required className='bg-transparent border border-gray-300 rounded-md px-5 py-3 focus:outline-none'/>
            <input type="text" name="name" placeholder='Enter Name' required className='bg-transparent border border-gray-300 rounded-md px-5 py-3 focus:outline-none'/>
            <button type='submit' className='bg-green-500 text-white font-bold rounded-md w-full px-5 py-2'>Add Users</button>
            <button onClick={()=> navigate('/users')} type='button' className='bg-red-500 text-white font-bold rounded-md w-full px-5 py-2'>See Users</button>
        </form>
    </div>
  )
}

export default Home