import React from "react";

function ContactPage() {
  return (
    <div className="p-10 text-white bg-slate-950 rounded-lg ml-4 mr-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        Have a question or concern? We're here to help! Contact us using one of
        the methods below and we'll get back to you as soon as possible.
      </p>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <h2 className="text-2xl font-bold mb-2">Email Us</h2>
          <p className="text-lg mb-2">
            Email us at{" "}
            <a href="mailto:contact@hardmartx.com">contact@hardmartx.com</a> and
            we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="w-1/2 ml-2">
          <h2 className="text-2xl font-bold mb-2">Call Us</h2>
          <p className="text-lg mb-2">
            Call us at <a href="tel:+1234567890">+123-456-7890</a> between 9am
            and 5pm EST, Monday through Friday.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 mr-2">
          <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
          <p className="text-lg mb-2">
            Come visit us at our headquarters at PATATA ST, Port 3500 Anytown IRONHACK.
          </p>
        </div>
        <div className="w-1/2 ml-2">
          <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
          <p className="text-lg mb-2">
            Stay up to date with us on social media:
            <br />
            <a
              href="https://www.facebook.com/hardmartx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com/hardmartx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://www.instagram.com/hardmartx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
