import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Food from './pages/Food';
import Home from './pages/Home';
import FoodDetail from './pages/FoodDetail';
import Cursor from './components/Cursor'
import Main from './pages/Main'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Footer from './components/Footer';

// import Sidebar from './components/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import BlogSection from './components/BlogSection';

function App() {
useEffect(() => {
 
  Aos.init();
  
}, [])

  return (
    <>
    {/* <Sidebar/> */}
      <Navbar/>
 <Main/>
      
<Cursor/>
      <Routes>
        <Route path = "/create-food" element = {<Food/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/food-detail/:id" element = {<FoodDetail/>}/>
      </Routes>
     {/* <BlogSection/> */}
     <Footer/>
    </>
  );
}

export default App;
