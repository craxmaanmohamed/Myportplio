
import { BrowserRouter ,Routes,Router,Route} from 'react-router-dom';
import Contact from './components/Contact';
import Projects from "./components/Project"
import Skills from "./components/Skills"
import Home from "./components/Home"
import About from './components/About';
import Footer from './components/Footer';
import Header from './Header';
function App() {
  return(
    <>
  <BrowserRouter> 
    <Header/>
    <Home/>
    <About/>
    <Skills/> 
    <Projects/> 
    <Contact/> 
    <Footer/>
    </BrowserRouter>
    </>


  
 
  )
}

export default App
