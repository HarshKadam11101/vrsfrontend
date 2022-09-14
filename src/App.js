
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <header>
      <Header />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<Register/>}/>

          
        </Routes>
      </header>
    </div>
  );
}

export default App;
