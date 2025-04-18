import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import AuthProvider from './context/AuthContext';
import RedeemPage from './pages/RedeemPage';
import HistoryPage from './pages/HistoryPage';
import Navbar from './components/Navbar';
import AlertProvider from './context/AlertContext';
import HomePage from './pages/HomePage';
import EarnPage from './pages/EarnPage';



function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/';
  return (
    <AlertProvider>
      <AuthProvider>

        {!hideNavbar && <Navbar />}
        <Routes>

          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/redeem" element={<RedeemPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>


      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
