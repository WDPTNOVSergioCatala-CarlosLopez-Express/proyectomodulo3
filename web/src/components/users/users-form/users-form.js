import React from 'react';
import { useState,  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/users';  // import user services
import producstService from '../../services/products';  // import product services
import Select from 'react-select';
import { useForm } from 'react-hook-form';

function UserForm () {
    const { register, handleSubmit, watch, control, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
    const [serverError, setServerError] = useState(undefined);
    const navigate = useNavigate();

    const onUserSubmit = async (user) => {
        try {
            setServerError(undefined);
            console.debug('Registering user');
            user = await userService.create(user);
            navigate('/login', { state: { message: 'User created successfully. Please login.' } });
        } catch (error) {
            const errors = error.response?.data?.errors;
            Object.keys(errors).forEach((inputName) => setError(inputName, { type: 'manual', message: errors[inputName] }));
        } else {
            setServerError(error.message);
        }
    };
}


return (
    <form onSubmit={handleSubmit(onUserSubmit)}>
        <div className="row g-2">

                {/* NAME */}
                <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-user fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Name" {...register('name', {
                required: 'User name is required'
              })} />
            {errors.name && <div className='invalid-feedback'>{errors.name?.message}</div>}
          </div>
        </div>

                        {/* SURNAME */}
                        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-user fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Name" {...register('name', {
                required: 'User surname is required'
              })} />
            {errors.name && <div className='invalid-feedback'>{errors.name?.message}</div>}
          </div>
        </div>

         {/* USERNAME */}
         <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              placeholder="johndoe" {...register('username', {
                required: 'Username is required',
                pattern: {
                  value: /^[a-z0-9]+$/,
                  message: 'Username must be lowercase and without spaces'
                }
              })} />
            {errors.username && <div className='invalid-feedback'>{errors.username?.message}</div>}
          </div>
        </div>

                {/* EMAIL */}
                <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-envelope-o fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="user@example.org" {...register('email', {
                required: 'User email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'User email must be valid'
                }
              })} />
            {errors.email && <div className='invalid-feedback'>{errors.email?.message}</div>}
          </div>
        </div>

        {/* PASSWORD */}
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-lock fa-fw'></i></span>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="****" {...register('password', {
                required: 'User password is required',
                minLength: {
                  value: 8,
                  message: 'User password needs at least 8 chars'
                }
              })} />
            {errors.password && <div className='invalid-feedback'>{errors.password?.message}</div>}
          </div>
        </div>

        {/* ADDRESS */}
        <div className="col-md-6">
            <div className="input-group">
                <span className="input-group-text"><i className='fa fa-map-marker fa-fw'></i></span>
                <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    placeholder="Address" {...register('address', {
                        required: 'User address is required'
                        })} />
                        {errors.address && <div className='invalid-feedback'>{errors.address?.message}</div>}
            </div>
        </div>

        {/* PROFILEPIC */}
        <div className="col-md-6">
            <div className="input-group">
                <span className="input-group-text"><i className='fa fa-image fa-fw'></i></span>
                <input
                    type="text"
                    name="profilepic"
                    className={`form-control ${errors.profilepic ? 'is-invalid' : ''}`}
                    placeholder="Profile Pic" {...register('profilepic', {
                        required: 'User profilepic is required' })} />
                        {errors.profilepic && <div className='invalid-feedback'>{errors.profilepic?.message}</div>}
            </div>
        </div> 

    {serverError && <div className="alert alert-danger d-none d-lg-block">{serverError}</div>}

            <div className="d-grid mt-2">
                <button type="submit" className='btn btn-primary'>Register</button>
            </div>
        </form>
    </div>


);


export default UserForm;