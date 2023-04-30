import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usersService from '../../../services/user';
import { AuthContext } from '../../../contexts/AuthStore';

function UsersLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur', defaultValues: { username: location?.state?.user?.username } });
  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext);
  
  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      onUserChange(user);
      navigate('/');
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.message)
      }
    }
  }

  return (
    <>
      {location?.state?.user?.confirm === false && <div className="alert alert-info">You must active your account before login, please check your inbox</div>}
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        {serverError && <div className="alert alert-danger d-none d-lg-block">{serverError}</div>}
        <div className="input-group mb-1">
          <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            placeholder="username" {...register('username', {
              required: 'Username is required'
            })} />
          {errors.username && <div className='invalid-feedback'>{errors.username?.message}</div>}
        </div>

        <div className="input-group mb-1">
          <span className="input-group-text"><i className='fa fa-lock fa-fw'></i></span>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="****" {...register('password', {
              required: 'User password is required'
            })} />
          {errors.password && <div className='invalid-feedback'>{errors.password?.message}</div>}
        </div>

        <div className="d-grid mt-2">
          <button type="submit" className='btn btn-primary'>Login</button>
        </div>
      </form>
    </>
  )
}

export default UsersLogin