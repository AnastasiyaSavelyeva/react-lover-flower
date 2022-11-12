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
import { useState } from 'react';
import { bouquets } from './data'
import Buttons from './Buttons';

function App() {

  const [bouquet, setBouquet] = useState(bouquets)

  const chosenFlowers = (category) => {
    const newFlowers = bouquets.filter(element => 
      element.category === category);
      setBouquet(newFlowers)
  }

  return <Router>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/catalog" element={ <Buttons filteredFlowers = {chosenFlowers}/> && <Catalog newCatalog = {bouquet}/> } />
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
    <Footer/>
  </Router>
}

export default App;
