import React from 'react'
import useUser from './hooks/useUser'
import User from './User';

const App = () => {

  const {user} = useUser();

 const count = user.length;
  return (
    <div className='flex flex-col items-center h-screen max-w-screen bg-gray-200'>
      <h1 className='text-5xl'>User List {count}</h1>

      <User users={user} />
    </div>
  );
}


export default App