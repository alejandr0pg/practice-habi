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
import { Provider } from 'react-redux';
import { store } from "./store";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistStore } from "reduxjs-toolkit-persist";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResumeContainer from './pages/resume/ResumeContainer';

const element = document.getElementById('root')!;
const root = ReactDOM.createRoot(element);

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer hideProgressBar closeOnClick />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingContainer />} />
            <Route path="/sell-house" element={<SellHouseContainer />}>
              <Route path=":step" element={<SellHouseContainer />} />
            </Route>
            <Route path='/resume-of-sell-house' element={<ResumeContainer />} />
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
