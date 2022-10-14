import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer"
import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Furnitures from "./components/pages/furnitures/Furnitures"
import Testimonial from "./components/pages/testimonial/Testimonial"
import ContactUs from "./components/pages/contact-us/ContactUs"
import PageNotFound from './components/pages/pageNotFound/PageNotFound'
import Login from './components/pages/login/Login'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/furnitures" element={<Furnitures />} />
        <Route exact path="/testimonial" element={<Testimonial/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
