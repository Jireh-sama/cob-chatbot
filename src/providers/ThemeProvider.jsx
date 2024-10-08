import { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeMode = {
  Light: {
    name: "light",
  },
  Dark: {
    name: "dark",
  },
  System: {
    name: "system",
  },
};

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light";
};

const ThemeProvider = ({ children }) => {
  const [resolvedTheme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    if (resolvedTheme === "system") {
      setTheme(
        matchMedia("(prefers-color-scheme: light)").matches ? "dark" : "light",
      );
    } else setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const changeTheme = (value) => {
    switch (value) {
      case ThemeMode.Light.name:
        setTheme(value);
        break;
      case ThemeMode.Dark.name:
        setTheme(value);
        break;
      case ThemeMode.System.name:
        setTheme(value);
    }
  };

  // listener
  useEffect(() => {
    switch (resolvedTheme) {
      case ThemeMode.Light.name:
        localStorage.setItem("theme", resolvedTheme);
        document.documentElement.classList.add(ThemeMode.Light.name);
        document.documentElement.classList.remove(ThemeMode.Dark.name);
        break;
      case ThemeMode.Dark.name:
        localStorage.setItem("theme", resolvedTheme);
        document.documentElement.classList.add(ThemeMode.Dark.name);
        document.documentElement.classList.remove(ThemeMode.Light.name);
        break;
      case ThemeMode.System.name:
        if (matchMedia("(prefers-color-scheme: light)").matches) {
          localStorage.setItem("theme", ThemeMode.System.name);
          document.documentElement.classList.add(ThemeMode.Light.name);
          document.documentElement.classList.remove(ThemeMode.Dark.name);
        } else {
          localStorage.setItem("theme", ThemeMode.System.name);
          document.documentElement.classList.add(ThemeMode.Dark.name);
          document.documentElement.classList.remove(ThemeMode.Light.name);
        }
        break;
    }
  }, [resolvedTheme]);

  const themes = useMemo(() => {
    return {
      themes: {
        default: [resolvedTheme, setTheme],
        toggleTheme: toggleTheme,
        changeTheme: changeTheme,
      },
    };
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
