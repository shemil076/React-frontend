import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import AuthProvider from './context/AuthContext';
import HomePage from './pages/HomePage';
import EarnPage from './pages/EarnPage';
import RedeemPage from './pages/RedeemPage';
import BalancePage from './pages/BalancePage';
import HistoryPage from './pages/HistoryPage';
import Navbar from './components/Navbar';
import AlertProvider from './context/Alert ontext';


function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/';
  return (
    <AuthProvider>
       <AlertProvider>
       {!hideNavbar && <Navbar />}
      <Routes>

        <Route path="/" element={<AuthPage />} />
        <Route path="/earn" element={<EarnPage />} />
        <Route path="/redeem" element={<RedeemPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
       </AlertProvider>
       
    </AuthProvider>
  );
}

export default App;
