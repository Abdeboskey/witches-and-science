import seed from './assets/seed.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={seed} className="App-logo" alt="logo" />
        <p>
	  <code>A creative coven in Denver, CO</code>
        </p>
        <a
          className="App-link"
          href="https://www.witchesandscience.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Witches & Science 
        </a>
      </header>
    </div>
  );
}

export default App;
