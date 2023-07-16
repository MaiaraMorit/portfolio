"use client";

import { Header } from "@/app/components/Header";
import { useState, useEffect } from "react";
import {Sobre} from "@/app/components/Sobre";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={darkMode ? "dark bg-gray-800" : ""}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Sobre darkMode={darkMode} />
    </main>
  );
}
