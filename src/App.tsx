import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { parseString } from 'xml2js';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  const dataArr: any[] = [];

  useEffect(() => {
      fetch("/api/json")
        .then(async res => await res.json())
        .then(data => {
          console.log(data, "JSON")
          dataArr.push(...data.person)
        });

      fetch("/api/xml")
      .then(res => res.text())
      .then(data => parseString(data, (err, result) => {
        if (err) {
          console.error(err);
          return
        }

        console.log(result, "XML")
        dataArr.push(...result.persons.person)
        setLoading(false)
        console.log(dataArr, "DATA ARRAY")
      }));
  }, []);

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      }
    </div>
  );
}

export default App;
