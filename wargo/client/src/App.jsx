import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout';

// Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Goals from './pages/Goals/Goals';
import Calendar from './pages/Calendar/Calendar';
import Analytics from './pages/Analytics/Analytics';
import Settings from './pages/Settings/Settings';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isAuthenticated] = useState(localStorage.getItem('token') ? true : false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route
              path='/'
              element={
                <MainLayout activePage={activePage} setPage={setActivePage}>
                  <Dashboard />
                </MainLayout>
              }
            />
            <Route
              path='/goals'
              element={
                <MainLayout activePage={activePage} setPage={setActivePage}>
                  <Goals />
                </MainLayout>
              }
            />
            <Route
              path='/calendar'
              element={
                <MainLayout activePage={activePage} setPage={setActivePage}>
                  <Calendar />
                </MainLayout>
              }
            />
            <Route
              path='/analytics'
              element={
                <MainLayout activePage={activePage} setPage={setActivePage}>
                  <Analytics />
                </MainLayout>
              }
            />
            <Route
              path='/settings'
              element={
                <MainLayout activePage={activePage} setPage={setActivePage}>
                  <Settings />
                </MainLayout>
              }
            />
          </>
        ) : (
          <Route path='*' element={<Navigate to='/landing' replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
