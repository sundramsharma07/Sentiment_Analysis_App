import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
