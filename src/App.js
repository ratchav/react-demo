import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return response.data;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);
  
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <div className="App">
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Reder Count: {count.current}</h1>
    </div>
  );
}

export default App;
