import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Artifacts from './components/Artifacts.jsx';
import ConnectWithMe from './components/ConnectWithMe.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Artifacts />
      <ConnectWithMe />
      <Footer />
    </div>
  );
}

export default App;
