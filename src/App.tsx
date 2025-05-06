import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AppointmentsPage from './pages/appointments/AppointmentsPage';
import CasualtiesPage from './pages/casualties/CasualtiesPage';
import MedicalGuidesPage from './pages/guides/MedicalGuidesPage';
import ForumPage from './pages/forum/ForumPage';
import AdminPanel from './pages/admin/AdminPanel';
import NotFoundPage from './pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/ww2-medical-forum' : '/';
  
  return (
    <AuthProvider>
      <Router basename={basename}>
        <div className="flex flex-col min-h-screen bg-khaki-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute allowedRoles={['US_ARMY', 'MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']}>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              <Route path="/appointments/*" element={
                <ProtectedRoute allowedRoles={['US_ARMY', 'MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']}>
                  <AppointmentsPage />
                </ProtectedRoute>
              } />
              <Route path="/casualties/*" element={
                <ProtectedRoute allowedRoles={['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']}>
                  <CasualtiesPage />
                </ProtectedRoute>
              } />
              <Route path="/guides/*" element={
                <ProtectedRoute allowedRoles={['MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']}>
                  <MedicalGuidesPage />
                </ProtectedRoute>
              } />
              <Route path="/forum/*" element={
                <ProtectedRoute allowedRoles={['US_ARMY', 'MEDIC', 'NCO', 'OFFICER', 'STAFF', 'MP', 'ADMIN']}>
                  <ForumPage />
                </ProtectedRoute>
              } />
              <Route path="/admin/*" element={
                <ProtectedRoute allowedRoles={['ADMIN']}>
                  <AdminPanel />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;
