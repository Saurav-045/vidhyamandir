import './App.css';
import {Auth} from './components/Auth';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element = {<Auth/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
