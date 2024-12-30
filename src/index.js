import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../src/context/user'; 
import MainPage from './pages/main';
import Registration from './pages/registration';
import Login from './pages/login';
import FavouritesPage from './pages/favourites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path='/Favourites' element={<FavouritesPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);