import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio em construção... 🚧
        </p>
        <a
          className="App-link"
          href="https://github.com/ajuliamm?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse meus projetos no GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
