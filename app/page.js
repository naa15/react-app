import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Content} from '../components/Content';
import styles from "../style/App.css"
import { cookies } from 'next/headers';
import { AUTH_COOKIE_KEY } from '@/constants';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  if (!cookie) {
    redirect("/login");
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
