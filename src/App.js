import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Categories from './components/Categories';
function App() {
  return (
    <BrowserRouter>
    <div className="">
      <div>
       <Navbar/>
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/categories" element = {<Categories/>}/>
      </Routes>
       
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
