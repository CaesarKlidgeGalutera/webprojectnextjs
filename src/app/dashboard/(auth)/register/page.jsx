"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <form
        action=""
        className="w-[18.75rem] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="username"
          required
          className="p-5 border-2 border-solid rounded text-lg font-bold"
        />
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
          Register
        </button>
      </form>
      {error && <p className="text-red-500">Something went wrong</p>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
