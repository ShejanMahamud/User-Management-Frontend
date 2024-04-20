import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const User = () => {

    const data = useLoaderData();

    const [user,setUser] = useState(data)

    const navigate = useNavigate();

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully User Deleted!');
            const remaining =  user.filter(user => user._id !== id);
            setUser(remaining);
            }
        })
    }

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
    {
        user.map(user => (
            <div key={user._id} className='inline-flex px-3 py-2 flex-col justify-center items-center my-2 border border-gray-400 rounded-md'>
        <span>{user._id}</span>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <button onClick={()=>handleDelete(user._id)} className='px-3 py-2 rounded-md bg-red-500 text-white mt-2'>Delete User</button>
        <button onClick={()=>navigate(`/users/${user._id}`)} className='px-3 py-2 rounded-md bg-green-500 text-white mt-2'>Update User</button>
    </div>
        ))
    }
    <button onClick={()=> navigate('/')} type='button' className='bg-green-500 text-white font-bold rounded-md my-5 px-5 py-2 inline-block'>Back To Home</button>
    </div>
  )
}

export default User