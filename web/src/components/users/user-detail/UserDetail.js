import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usersService from '../../../services/users';

function UserDetail() {
  const [user, setUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await usersService.get(userId);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [userId])

  return (
    <>
      {!user ? (<p><i className='fa fa-gear fa-spin'></i>Loading...</p>) : (
        <>
          <h1>{user.name}</h1>
        </>
      )}
    </>
  )
}

export default UserDetail