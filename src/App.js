import logo from './logo.svg';
import './App.css';

const name = 'Afsana Ara';
const number = 600;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello React,lets Go</h3>
        </div>
        <div className="music">
          <p>Name: {name}</p>
          <p>Number : {10+ number }</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Go
        </a>
      </header>
    </div>
  );
}

export default App;
