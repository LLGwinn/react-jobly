import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';
import Navbar from './Navbar';
import TokenContext from './tokenContext';
import JoblyApi from './api';

function App() {
  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  function addToken(authToken) {
      setToken(authToken);
  }

  async function addCurrUser(username) {
      if(username) {
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
      } else {
      setCurrUser(null);
      }
  }


  return (
    <div className="App">
      <TokenContext.Provider value={{token, currUser, addToken, addCurrUser}}>
        <Navbar />
        <Routes />
      </TokenContext.Provider>
    </div>
  );
}

export default App;

/** Just created Context for the token. Need to create a function here
 *  to set the token so it can be done from any other component.
 * 
 *  The forms are all done, but there are no click handlers yet.
 * 
 *  I'm on Step 6.
 */
