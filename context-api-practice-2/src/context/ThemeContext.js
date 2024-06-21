import { createContext, useContext } from "react";

export const ThemeContext= createContext({
    theme:"light",
    lightTheme:()=>{},
    darkTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider


//creating this custom hook for easir importing
export const useTheme=()=>{
    return useContext(ThemeContext)
}