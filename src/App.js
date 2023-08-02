
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skill from './containers/skill';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './component/navBar';
import particles from './utils.js/particles';




function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderparticleJsHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particales js */}

      {
        renderparticleJsHomePage && (
          <Particles id="particles" options={particles} init={handleInit} />
        )}

      {/* navbar */}
      <Navbar />
      {/* main page contant */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      </div>

    </div>
  );
}

export default App;
