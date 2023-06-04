"use client";
import Image from "next/image";
import styles from "./page.module.css";
import randomGreeting from "@/components/helper";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        {randomGreeting()}
        <h1>👋🏾 Moshood Saka</h1>
        <h2> Build + Secure</h2>
      </div>
      <Footer />
    </section>
  );
}
