import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';
import Catalog from './Catalog';
import About from './About';
import Contacts from './Contacts';
import Header from './Header';
import Footer from './Footer';


function App() {

  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/catalog" element={ <Catalog/> } />
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
    <Footer/>
  </Router>
  
}

export default App;
