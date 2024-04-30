import Head from "next/head";
import React from "react";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="main">
        <div className="container gap-6">
          <div className="abc">
            <div className="pt-3 pb-6">
              <button className="btn cursor-pointer rounded-full size-10 text-justify grid place-items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-3xl font-bold gap-5 pb-3">Sign up</h1>
            <p style={{ color: "#6D6D6D" }} className="text-sm pb-5">
              Please enter your legal name. This information will be used to
              verify your account.
            </p>
            <div className="">
              <form className="flex flex-col justify-between">
                <label className="text-sm font-semibold pb-1">Name</label>
                <input
                  placeholder="Aries"
                  className="block rounded-full px-3 py-2.5 "
                ></input>

                <label className="text-sm font-semibold pb-1 pt-5">Phone</label>
                <input
                  placeholder="US      +1"
                  type="number"
                  className="block rounded-full px-3 py-2.5 "
                ></input>
                <div className="flex flex-col justify-between pt-72 pb-9">
                  <button
                    type="submit"
                    className="submit rounded-full px-3 py-2.5"
                  >
                    <p className="text-white text-sm font-semibold grid items-center">
                      Continue
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
