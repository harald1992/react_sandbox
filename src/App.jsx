import './App.css';
import { Link, Route, Routes } from "react-router-dom";


import { BlogHomePage } from './Pages/BlogHomePage';
import Navbar from './Components/Navbar';
import ParticleCanvas from './Components/ParticleCanvas/ParticleCanvas';
import BlogDetails from './Pages/Blogs/BlogDetails';
import Agenda from './Pages/Agenda/Agenda';

function App() {
  return (
    <div className="App">
      <ParticleCanvas />

      <Navbar></Navbar>

      <div className="content-container headerfootermargin">
        <Routes>
          <Route path="/react_sandbox" element={<BlogHomePage />}></Route>
          <Route path="/" element={<BlogHomePage />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="/checklist" element={<Agenda />}></Route>

          <Route path="*" element={<p>/</p>}></Route>


        </Routes>
      </div>

      <footer className="app-footer">
        <ul className='footer-nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checklist">Checklist</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
