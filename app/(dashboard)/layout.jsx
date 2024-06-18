import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  if (!cookie) {
    redirect("/login");
  }


  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
