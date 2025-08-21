import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Testimonials from './components/Testimonials';
import Signup from './components/Signup';
import FeaturesData from './components/FeaturesData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen bg-white">
      <Header />
      <MainContent />
      <Testimonials />
      <Signup />
      <FeaturesData />
      <Footer />
      

    </div>
  );
}

export default App;