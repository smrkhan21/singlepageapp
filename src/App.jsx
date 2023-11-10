import './App.css'
import About from './components/About.jsx';
import Home from "./components/Home.jsx";
import MyFooter from './components/MyFooter.jsx';
import NavBar from "./components/Navbar.jsx";
import Newsletter from './components/Newsletter.jsx';
import Products from './components/Products.jsx';
import Services from './components/Services.jsx';

export default function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Newsletter/>
      <MyFooter/>
    </>
  )
}