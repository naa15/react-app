'use client';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Content} from '../components/Content';
import styles from "../style/App.css"

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
