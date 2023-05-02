import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usersService from '../../../services/user';
import { AuthContext } from '../../../contexts/AuthStore';

function UsersLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur', defaultValues: { username: location?.state?.user?.username } });
  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext); // use the AuthContext from the AuthStore component

  //useEffect contexto
  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      onUserChange(user);
      navigate('/');
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors).forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.message)
      }
    }
  }

  return (
    <>
    
      {location?.state?.user?.confirm === false && <div className="alert alert-info">You must active your account before login, please check your inbox</div>}
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        {serverError && <div className="alert alert-danger hidden lg:block">{serverError}</div>}
        <div className="mb-1">
          <div className="relative">
            <span className="absolute left-3 top-2"><i className='fa fa-tag fa-fw'></i></span>
            <input
              type="text"
              className={`border-2 rounded-md w-full pl-10 py-2 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="username"
              {...register('username', { required: 'Username is required' })}
            />
          </div>
          {errors.username && <p className='text-red-500 mt-2'>{errors.username?.message}</p>}
        </div>

        <div className="mb-1">
          <div className="relative">
            <span className="absolute left-3 top-2"><i className='fa fa-lock fa-fw'></i></span>
            <input
              type="password"
              className={`border-2 rounded-md w-full pl-10 py-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="****"
              {...register('password', { required: 'User password is required' })}
            />
          </div>
          {errors.password && <p className='text-red-500 mt-2'>{errors.password?.message}</p>}
        </div>

        <div className="d-grid mt-2 text-center">
          <button type="submit" className='bg-slate-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
        </div>
      </form>
    </>
  )
}

export default UsersLogin;
