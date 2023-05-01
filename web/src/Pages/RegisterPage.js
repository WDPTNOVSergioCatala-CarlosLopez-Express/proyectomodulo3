import React from "react";
import UserForm from "../components/users/users-form/users-form";
import PageLayout from "../components/layout/PageLayout";
import { Link } from "react-router-dom";

function Register() {
  return (
    <PageLayout title="Register">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="max-auto mb-3 text-center">
            <img
              src={
                "https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png"
              }
              alt="logo"
              width="200"
            />
          </div>
          <UserForm />
          <hr />
          <p className="m-0 text-muted">
            Already registered? just <Link to="/login">Login!</Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Register;
