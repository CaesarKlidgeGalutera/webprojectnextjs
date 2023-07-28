"use client";
import { signIn } from "next-auth/react";
import React from "react";


const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <form
        action=""
        className="w-[18.75rem] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email"
          required
          className="p-5 border-2 border-solid rounded text-lg font-bold"
        />
        <input
          type="password"
          placeholder="password"
          required
          className="p-5 border-2 border-solid rounded text-lg font-bold"
        />
        <button className="primary_btn p-5 text-lg font-bold" type="submit">
          Login
        </button>
      </form>
      <button
        onClick={() => signIn("google")}
        className="border-solid border-black border-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
