import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./Layout.scss";

export default function Layout() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main
      className="main-container"
      style={
        {
          "--x": `${pos.x}px`,
          "--y": `${pos.y}px`,
        } as React.CSSProperties
      }
    >
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}