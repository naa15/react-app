import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import styles from "../../style/App.css";

export default function Layout({ children }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  if (!cookie) {
    redirect("/login");
  }

  return (
    <div className="App">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}
