import Image from "next/image";
import yourImageUrl from "../public/images/mainbg.png";
import styles from "./page.module.css";
import RandomGreeting from "@/components/helper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <section>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <p style={{ fontSize: "30px" }}>👋🏾</p>
        <p style={{ fontSize: "24px" }}>Hi, I&apos;m Moshood!</p>
        <h2 style={{ fontSize: "20px", color: "#999" }}>
          I&apos;m in the process of building a new portfolio. In the meantime,
          you can view my previous portfolio
        </h2>
        <a href="http://www.moshoodsaka.appspot.com" style={lol}>
          Here
        </a>
      </div>
      <Footer />
    </section>
  );
}

const lol = {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "20px",
    color: "white",
    backgroundColor: "grey",
    textDecoration: "none",
    borderRadius: "25px",
    marginTop: "25px",
  };