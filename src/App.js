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
<<<<<<< HEAD
import Footer from './components/functional_components/Footer';
=======
>>>>>>> a8a5dcf97f13b0152b149e41283454e4fcad7940

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
<<<<<<< HEAD
=======
        <Route path="/" element={}></Route>
>>>>>>> a8a5dcf97f13b0152b149e41283454e4fcad7940
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Experiance" element={<Experiance/>}></Route> 
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
<<<<<<< HEAD
   
      </BrowserRouter>
      <div >
   <Footer/>
   </div>
      
      {/* <PropsComponent name="Nijithra" course="Mern"/> */}
      
      {/* <header className="App-header"> */}
    {/* <StateComponent/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
=======
     
      </BrowserRouter>
      
      {/* <PropsComponent name="Nijithra" course="Mern"/> */}
      
      <header className="App-header">
    {/* <StateComponent/> */}
        <img src={logo} className="App-logo" alt="logo" />
>>>>>>> a8a5dcf97f13b0152b149e41283454e4fcad7940
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
<<<<<<< HEAD
      {/* </header> */}
=======
      </header>
>>>>>>> a8a5dcf97f13b0152b149e41283454e4fcad7940
    </div>
  );
}

export default App;
