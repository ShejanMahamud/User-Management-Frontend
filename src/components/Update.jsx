import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {

const data = useLoaderData();

const navigate = useNavigate();

const handleUpdate = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const name = e.target.name.value;

  const updatedUser = {name,email}

  fetch(`http://localhost:5000/users/${data._id}`,{
    method: 'PUT',
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updatedUser)
  })
  .then(res => res.json())
  .then(data => {
    if(data.modifiedCount > 0){
      alert('Updated Successfully!')
    }
  })

}

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-3'>
        <form onSubmit={handleUpdate} className='flex items-center justify-center flex-col gap-5'>
            <input type="text" name="email" placeholder='Enter email' required className='bg-transparent border border-gray-300 rounded-md px-5 py-3 focus:outline-none' defaultValue={data?.name}/>
            <input type="text" name="name" placeholder='Enter Name' required className='bg-transparent border border-gray-300 rounded-md px-5 py-3 focus:outline-none' defaultValue={data?.email}/>
            <div className='flex w-full items-center gap-2'>
            <button onClick={()=>navigate('/users')} type='button' className='bg-red-500 text-white font-bold rounded-md w-full px-5 py-2'>Back</button>
            <button type='submit' className='bg-green-500 text-white font-bold rounded-md w-full px-5 py-2'>Update</button>
            </div>
           
        </form>
    </div>
  )
}

export default Update