
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/login/Login';
import Home from './Component/dashboard2/home/home';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Login/>}></Route>
<Route exact path='/dashboard' element={<Home/>}></Route>     
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
