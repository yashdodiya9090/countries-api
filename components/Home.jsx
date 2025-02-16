import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { TheamContext } from '../contexts/TheamContext'
import useWindowSize from '../hooks/useWindowSize'
import useTheamContext from '../hooks/useTheamContext'

export default function Home() {
  const [query, setQuery] = useState('')

  const [isDark] = useTheamContext()

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  )
}
