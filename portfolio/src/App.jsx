
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from '. /components/Footer'
import Profile from './components/Profile'
import Navbar from './components/Navbar'


function App() {

  return (
    <div>
        <Navbar />
        <Profile />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default App