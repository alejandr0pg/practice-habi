import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingContainer from './pages/landing/LandingContainer';
import SellHouseContainer from './pages/sell/SellHouseContainer';
import './index.scss';

const element = document.getElementById('root')!;
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingContainer />} />
        <Route path="/sell-house" element={<SellHouseContainer />} />
        <Route path="*">
          404 not found
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
