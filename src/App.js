import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({ 
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled','success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
      <Navbar title="MyReact" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />
          </Route>
      </Switch>
      </div>
    </>
  );
}
export default App;