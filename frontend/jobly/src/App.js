import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';
import Navbar from './Navbar';

function App() {
  const [token, setToken] = useState(null);

  
  return (
    <div className="App">
      <Navbar token={token}/>
      <Routes />
    </div>
  );
}

export default App;
