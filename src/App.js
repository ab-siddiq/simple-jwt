import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
