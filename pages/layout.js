import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <SpeedInsights/>
      <Footer />
    </div>
  );
}
