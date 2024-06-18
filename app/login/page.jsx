"use server";

import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LoginForm from "@/components/LoginForm";
import { login } from "../actions";

export default async function Login() {
  const cookieStore = cookies();

  //   cookieStore.set(AUTH_COOKIE_KEY, "1234");

  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center sm:dark:bg-black md:dark:bg-slate-400 bg-white">
      <div className="w-full max-w-md p-4 sm:dark:bg-slate-500 bg-white">
        <div className="w-full max-w-md p-4 sm:dark:bg-slate-500 bg-white text-center text-xl">
          Login
        </div>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
}
