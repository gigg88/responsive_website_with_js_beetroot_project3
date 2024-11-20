import Home from './pages/Home'
import React from 'react';
import './App.css';
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyInfo from './pages/CurrencyInfo';
import CurrencyOption from './pages/CurrencyOption';
import Default from './layouts/Default';
import { Route, Routes } from 'react-router-dom';
import Converter from './pages/Converter';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <Default/>}>
        <Route index element ={<Home/>} />
        <Route path='CurrencyInfo' element={<CurrencyInfo/>}/>
        <Route path='Converter' element={<Converter/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
