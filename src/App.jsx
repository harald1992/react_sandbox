import './App.css';
import { Link, Route, Routes } from "react-router-dom";

import Navbar from './Components/Navbar';
import ParticleCanvas from './Components/ParticleCanvas/ParticleCanvas';
import BlogDetails from './Pages/Blogs/BlogDetails';
import Agenda from './Pages/Agenda/Agenda';
import CreateBlog from './Pages/Blogs/CreateBlog';
import { environment } from './environment';
import { BlogHomePage } from './Pages/Blogs/BlogHomePage';
import WhyReact from './Pages/WhyReact/WhyReact';
import DigitalBusinessCard from './Pages/DigitalBusinessCard/DigitalBusinessCard';
import AirBnbExperiences from './Pages/AirBnbExperiences/AirBnbExperiences';
import MemeGenerator from './Pages/MemeGenerator/MemeGenerator';
import FormExample from './Pages/FormExample/FormExample';
import Notes from './Pages/Notes/Notes';
import { CourseGoals } from './Pages/CourseGoals/CourseGoals';
import UseReducerTryout from './Pages/UseReducerTryout/UseReducerTryout';
import { AuthContext, AuthContextProvider } from './context/auth-context';
import { ComponentsSummary } from './Pages/ComponentsSummary/ComponentsSummary';
import ClassBasedComponents from './Pages/ClassBasedComponents/ClassBasedComponents';

function App() {



  return (
    <>
      <div className="App">
        <ParticleCanvas />

        <Navbar></Navbar>
        <div className="content-container headerfootermargin">
          <Routes>
            <Route path="/react_sandbox" element={<BlogHomePage />}></Route>
            <Route path="/blogs" element={<BlogHomePage />}></Route>
            <Route path={environment.routes.blogs} element={<BlogHomePage />}></Route>

            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="/checklist" element={<Agenda />}></Route>
            <Route path="/blogs/create" element={<CreateBlog />}></Route>
            <Route path="/whyreact" element={<WhyReact />}></Route>
            <Route path="/businesscard" element={<DigitalBusinessCard />}></Route>
            <Route path="/airbnb" element={<AirBnbExperiences />}></Route>
            <Route path="/memegenerator" element={<MemeGenerator />}></Route>
            <Route path="/formexample" element={<FormExample />}> </Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/coursegoals" element={<CourseGoals />}></Route>
            <Route path="/usereducertryout" element={<UseReducerTryout />}></Route>
            <Route path="/componentlist" element={<ComponentsSummary />}></Route>
            <Route path="/classbasedcomponents" element={<ClassBasedComponents />}></Route>


            <Route path="*" element={<h2>404: Not Found</h2>}></Route>


          </Routes>
        </div>

        <footer className="app-footer">
          <ul className='footer-nav'>
            <li>
              <Link to="/blogs">Blog Home page Home</Link>
            </li>
            <li>
              <Link to="/checklist">Checklist</Link>
            </li>
            <li>
              <Link to="/whyreact">Why excited React</Link>
            </li>
            <li>
              <Link to="/businesscard">Digital Business Card</Link>
            </li>
            <li>
              <Link to="/airbnb">AirBnbExperiences</Link>
            </li>
            <li>
              <Link to="/memegenerator">Meme Generator</Link>
            </li>
            <li>
              <Link to="/formexample">Form Example</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/coursegoals">Course Goals</Link>
            </li>
            <li>
              <Link to="/usereducertryout">usereducertryout</Link>
            </li>
            <li>
              <Link to="/componentlist">Component List</Link>
            </li>
            <li>
              <Link to="/classbasedcomponents">Class Based Components</Link>
            </li>
          </ul>
        </footer>
      </div >

    </>

  );
}

export default App;
