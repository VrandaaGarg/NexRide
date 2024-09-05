import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Contexts/Theme.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function Layout() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
