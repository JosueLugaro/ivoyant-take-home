import logo from './logo.svg';
import SortedData from './components/SortedData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SortedData />
      </header>
    </div>
  );
}

export default App;
