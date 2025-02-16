import { createContext, useState } from "react";

// const [a, setA] = useState()

export const TheamContext = createContext("Radha")

export function TheamProvider({ children }) {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")))

    return <TheamContext.Provider value={[isDark, setIsDark]}>
        {children}
    </TheamContext.Provider>
}   