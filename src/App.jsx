import './App.css'
import { NavBar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
import { Main } from './components/main/main'

function App() {

  return (
    <div className="app">
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
