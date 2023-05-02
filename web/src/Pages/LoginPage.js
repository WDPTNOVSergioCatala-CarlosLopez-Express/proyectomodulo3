import React from "react";
import UsersLogin from "../components/users/users-login/UsersLogin";
import PageLayout from "../components/layout/PageLayout";
import { Link } from "react-router-dom";
import AuthStore from "../contexts/AuthStore"


function LoginPage() {
  return (
    <PageLayout title="Login to your account">
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
            <UsersLogin />
          </AuthStore>
          <hr className="my-4" />
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default LoginPage;
