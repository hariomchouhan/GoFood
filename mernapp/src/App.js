import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
        <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/myorder' element={<MyOrder />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
