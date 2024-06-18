"use server";

import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(username, password) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = response.json();

  const cookieStore = cookies();

  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
}

export const logOut = () => {
  const cookieStore = cookies();

  cookies().delete(AUTH_COOKIE_KEY);

  redirect("/login");
}