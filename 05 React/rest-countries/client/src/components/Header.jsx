import { useState } from "react"
import { Link } from "react-router"

export default function Header() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark') ?? false))
  
  if(isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }

  const handleClick = () => {
    localStorage.setItem('isDark', !isDark)
    setIsDark(!isDark)
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <Link to="/">Where in the world?</Link>
        </h2>
        <p className="theme-changer" onClick={handleClick}>
          <i className={isDark ? 'fa-regular fa-sun' : 'fa-solid fa-moon'}></i>
          &nbsp;&nbsp;{isDark ? "Light": "Dark"} Mode
        </p>
      </div>
    </header>
  )
}