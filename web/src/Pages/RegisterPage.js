import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { Link } from "react-router-dom";
import AuthStore from "../contexts/AuthStore"
import UserForm from "../components/users/users-form/users-form";

function Register() {
  return (
    <PageLayout title="Register">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="max-auto mb-3 text-center">
            <img
              src="https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png"
              alt="Hardmartx"
              className="bg-slate-950 rounded h-32 md:h-auto mx-auto p-5"
              style={{ maxHeight: "130px" }}
            />
          </div>
          <AuthStore>
            <UserForm />
          </AuthStore>
          <hr className="my-4" />
          <p className="mt-2 text-sm text-gray-600">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Register;
