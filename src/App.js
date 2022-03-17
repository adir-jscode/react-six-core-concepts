import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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

const singers = [
  { name: 'Habib', job: 'natok' },
  {name:'Tahsan',job:'Super star'}
]

const products = [
  { name:'Laptop',price:"10000"},
  { name:'Laptop',price:"10000"},
  { name:'Laptop',price:"10000"},
  { name:'Laptop',price:"10000"},
  { name:'Laptop',price:"10000"}
]

function App() {
  const heros = ['sakib', 'rakin', 'taskin', 'rubel'];
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
      
      {
        heros.map(hero => <li>{ hero }</li>)
      }

      {
        heros.map(hero=><Person name={hero}></Person>)
      }

      {/* <Person name="Ara"></Person>
      <Person name="Baz"></Person>
      <Person name="adir"></Person> */}
      <h1>New Component</h1>
      <Friend name="John Kabir"></Friend>
      <Friend name="Taskin"></Friend>

      <h1>Singer Component</h1>
      {
        singers.map(singer => <Singers name={singer.name} job={singer.job}></Singers>)
        
      }
      
      <h1>Products Component</h1>
      {
        products.map(product =><Products name={product.name} price={product.price}></Products>)
      }

      <h1> Change State using useState()</h1>
      <Count></Count>
      <h1>Load data using UseState and UseEffect</h1>
      <LoadUsers></LoadUsers>
      <h1>Load comments</h1>
      <LoadComments></LoadComments>
    </div>
  );
}
function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
    .then(data =>setComments(data));
  },[])
  return (
    <div>
      <h1>Number of comments { comments.length }</h1>
      {
        comments.map(comment =><DisplayComments name={comment.name} body={comment.body}></DisplayComments>)
      }
    </div>
  )
}

function DisplayComments(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{ props.body}</p>
    </div>
  )
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));

  },[])
  return (
    <div>
      <h1> Number of users: {users.length}</h1>
      {
        users.map(user=> <DisplayUser name={user.name} address={user.address.street}></DisplayUser>)
      }
    </div>
  )
}

function DisplayUser(props) {
  console.log(props);
  return (
    <div>
      <h1> Name: {props.name}</h1>
      <p>Address: {props.address}</p>
    </div>
  )
}

function Count() {
  const [count, setCount] = useState(0);
  console.log(count, setCount);
  function increaseCount() {
    const newCount = count + 1;
    setCount(newCount);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
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



function Singers({name, job}) {
  // const { name, job } = props;
  console.log(name, job);
  return (
    <div>
      <h1>Name : {name}</h1>
      <h3>Job: {job}</h3>
    </div>
  )
}

function Products(props) {
  console.log(props);
  return (
    <div className="product">
      <h1>Product name: { props.name }</h1>
      <h3>Product Price : { props.price }</h3>
    </div>
  )
}

export default App;
