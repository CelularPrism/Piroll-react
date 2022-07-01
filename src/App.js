import { Header, Footer } from './Components';
import { Routes, Route } from 'react-router-dom'
import { Home, About } from './Pages'
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
