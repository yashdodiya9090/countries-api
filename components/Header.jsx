import { useContext } from "react"
import { TheamContext } from "../contexts/TheamContext"

export default function Header({ theam }) {

  const [isDark, setIsDark] = useContext(TheamContext)

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem("isDarkMode", !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp; {`${isDark ? "Light" : "Dark"}`} Mode
        </p>
      </div>
    </header>
  )
}
