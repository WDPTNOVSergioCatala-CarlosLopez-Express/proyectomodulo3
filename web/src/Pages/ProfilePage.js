import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthStore";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const onSubmit = (data) => {
    
    reset();
  };
  return (
    <div className="flex justify-center border border-gray-300 rounded-lg p-4">
      <div className="max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <h1 className="text-3xl font-bold my-4 text-center">
            {user.name} {user.surname}
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={user.username}
              {...register("username")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={user.email}
              {...register("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              defaultValue={user.address}
              {...register("address")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
