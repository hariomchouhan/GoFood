import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
