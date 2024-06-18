"use client";

import { useState } from "react";

export default function LoginForm({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <form className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded"
        onClick={() => handleLogin(email, password)}
      >
        Login
      </button>
    </form>
  );
}
