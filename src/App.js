import logo from './logo.svg';
import './App.css';
//import TestComponent from './components/functional_components/testcomponents';
//import PropsComponent from './components/functional_components/PropsComponent';
//import StateComponent from './components/class_components/StateComponent';
import NavBar from './components/functional_components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functional_components/About';
import Experiance from './components/functional_components/Experiance';
import Login from './components/functional_components/Login';
import Home from './components/functional_components/Home';

import Footer from './components/functional_components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>


       

        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Experiance" element={<Experiance/>}></Route> 
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>

      </BrowserRouter>
      <div >
   <Footer/>
   </div>
      
      {/* <PropsComponent name="Nijithra" course="Mern"/> */}
      
      {/* <header className="App-header"> */}
    {/* <StateComponent/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

     
      {/* </BrowserRouter> */}
      
      {/* <PropsComponent name="Nijithra" course="Mern"/> */}
      
      {/* <header className="App-header"> */}
    {/* <StateComponent/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      {/* </header> */}

      {/* </header> */}

    </div>
  );
}

export default App;
