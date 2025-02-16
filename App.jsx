import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import { TheamProvider } from './contexts/TheamContext'

const App = () => {
  return (
    <TheamProvider >
      <Header />
      <Outlet />
    </TheamProvider>
  )
}

export default App
