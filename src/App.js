import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
  );
}

export default App;
