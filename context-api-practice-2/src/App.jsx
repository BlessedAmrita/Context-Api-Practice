import { ThemeBtn, Card } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light")

  const lightTheme=()=>{
    setTheme("light")
  }

  const darkTheme=()=>{
    setTheme("dark")
  }

  //ACTUAL CHANGE IN THEME
  //we used useEffect so that when the page is loaded directly this is run
  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(theme)
  }, [theme])
  
  return (
    <>
      <ThemeProvider value={{theme,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center bg-gray-950">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
