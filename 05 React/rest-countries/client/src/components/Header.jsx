import { useState } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark') ?? false))
  
  console.log("////", isDark)
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
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={handleClick}>
          <i className={isDark ? 'fa-regular fa-sun' : 'fa-solid fa-moon'}></i>
          &nbsp;&nbsp;{isDark ? "Light": "Dark"} Mode
        </p>
      </div>
    </header>
  )
}