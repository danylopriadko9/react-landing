import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SignIn from './pages/SignIn';
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<SignIn />} exact />
      </Routes>
    </>
  );
}

export default App;
