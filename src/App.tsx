import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SignIn from './pages/SignIn';
import React from 'react';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  );
};

export default App;
