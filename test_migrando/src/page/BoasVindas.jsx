// App.js
import React from 'react';
import './BoasVindas.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HelpSection from '../components/HelpSection';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import { ThemeContext} from '../ThemeContext';
import { ThemeEffect } from '../ThemeEffect';




function BoasVindasContent() {
  ThemeEffect();
  
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HelpSection />
        <ProductCategories />
        <FeaturedProducts />
   
      </main>
      <Footer />
    </div>
  );
}

function BoasVindas() {
  return (
    <ThemeContext>
      <BoasVindasContent />
    </ThemeContext>
  );
}

export default BoasVindas;