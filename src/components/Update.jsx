import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

const data = useLoaderData();

  return (
    <div>
        {
            data.name
        }
    </div>
  )
}

export default Update