import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from './Pages/HomePage';
import { TodoList } from './Pages/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path="/react_sandbox" element={<HomePage />}></Route>
      </Routes>


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
