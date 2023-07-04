import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Donate from './Screens/Donate';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />    
    <Route exact path='/donate' element={<Donate />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
