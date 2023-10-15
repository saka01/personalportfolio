import Image from "next/image";
import RandomGreeting from "@/components/helper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <section>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <Image
          id="profile_pic"
          src="/images/profile_pic.jpg"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            border: "3px solid darkgrey",
          }}
        />
        <h1 style={{ fontSize: "56px" }}>MOSHOOD SAKA</h1>
          <br />
        <h2 style={{ fontSize: "26px" }}>
          SOFTWARE ENGINEER | FULL-STACK DEVELOPER
        </h2>
        <p style={{ fontSize: "13px", color: "#fff" }}>
          In the meantime, you can view my previous version. Its  really  old lol
        </p>
        <a href="http://www.moshoodsaka.appspot.com" style={lol}>
          Here
        </a>
      </div>
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