import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Birds from './Components/Birds';
import Birds_Details from './Components/Birds_Details';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Birds />} />
        <Route path="/Birds/:id" element={<Birds_Details />} />
    
   </Routes>
  );
}

export default App;
