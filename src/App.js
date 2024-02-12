import Navbar from './components/Navbar';
import Início from './components/Início';
import Sobre from './components/Sobre';
import Menu from './components/Menu';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';
import './App.css';
import './components/Navbar.css';
import './components/Início.css';
import './components/Sobre.css';
import './components/Menu.css';
import './components/Depoimentos.css';
import './components/Footer.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Início />
    <Sobre />
    <Menu />
    <Depoimentos />
    <Footer />
    </div>
    
    
  );
}

export default App;
