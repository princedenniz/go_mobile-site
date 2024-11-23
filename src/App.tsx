import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
// import MobileNav from './components/MobileNav'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Home/>
    </BrowserRouter>
  )
}

export default App
