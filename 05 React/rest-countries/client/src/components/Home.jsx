import React, { useContext, useState } from 'react'
import SelectMenu from './SelectMenu'
import SearchBar from './SearchBar'
import CountriesList from './CountriesList'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
  const {isDark} = useContext(ThemeContext)
  const [query, setQuery] = useState("")

  return (
    <>
      <main className={`${isDark ? 'dark': ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default Home