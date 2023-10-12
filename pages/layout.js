import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
