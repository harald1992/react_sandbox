import './App.css';
import { Link, Route, Routes } from "react-router-dom";


import { HomePage } from './Pages/HomePage';
import Navbar from './Components/Navbar';
import ParticleCanvas from './Components/ParticleCanvas/ParticleCanvas';

function App() {
  return (
    <div className="App">
      <ParticleCanvas />

      <Navbar></Navbar>

      <div className="headerfootermargin">
        <Routes>
          <Route path="/react_sandbox" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<p>/</p>}></Route>


        </Routes>
      </div>

      <footer className="app-footer">
        <ul className='footer-nav'>
          <li>
            <Link to="/react_sandbox">Home</Link>
          </li>
          <li>
            <Link to="/react_sandbox">Home</Link>
          </li>
          <li>
            <Link to="/react_sandbox">Home</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
