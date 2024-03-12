import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
