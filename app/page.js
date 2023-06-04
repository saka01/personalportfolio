"use client";
import Image from "next/image";
import styles from "./page.module.css";
import RandomGreeting from "@/components/helper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <RandomGreeting />
        <h1>👋🏾 Moshood Saka</h1>
        <h2> Build + Secure</h2>
      </div>
      <Footer />
    </section>
  );
}
