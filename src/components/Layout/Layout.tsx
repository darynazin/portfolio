import { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import "./Layout.scss";

type LayoutProps = {};

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
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
      {children}
    </main>
  );
}