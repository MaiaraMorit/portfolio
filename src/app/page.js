"use client";

import { Header } from "@/app/components/Header";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setDarkMode(true);
  }, []);

  return (
    <main className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="flex flex-grow min-h-screen mt-0 dark:bg-gray-800" />
    </main>
  );
}

