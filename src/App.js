import logo from './logo.svg';
import './App.css';

const name = 'Afsana Ara';
const number = 600;
const singer = {
  name: 'Atif Aslam',
  job:"singer"
}
const singerStyle = {
  backgroundColor: 'cyan',
  color: 'white',
  padding: '20px'

}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello React,lets Go</h3>
        </div>
        <div className="music">
          <p style={{color:'purple',backgroundColor:'white',padding:'40px'}}>Name: {name}</p>
          <p>Number : {10 + number}</p>
          <p style={singerStyle}>Name: {singer.name} Job: { singer.job }</p>
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
      </header> */}
      <h1>Components</h1>
      <h3>Similar in Looks</h3>
      <Person name="Ara"></Person>
      <Person name="Baz"></Person>
      <Person name="adir"></Person>
      <h1>New Component</h1>
      <Friend name="John Kabir"></Friend>
      <Friend name="Taskin"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className="container">
      <h1>Name : {props.name}</h1>
      <p>Job: Programming</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="friend">
      <h1>Name : { props.name }</h1>
      <h3>Job : Eating</h3>
    </div>
  )
}

export default App;
