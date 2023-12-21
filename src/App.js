import './App.css';
import Header from './components/Header';
import Poste from './components/Poste';
import Pnav from './components/Pnav';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Poste/>
      <Pnav/>
      
      <Cards/>
    </div>
  );
}

export default App;
