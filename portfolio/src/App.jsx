import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Work from './components/Work';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/work' element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
  
}

export default App
