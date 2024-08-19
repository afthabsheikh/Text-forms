import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
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
    <Router>
      <Navbar title="MyReact" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div>
      {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />
          </Route>
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<TextForm heading="TextUtils - uppercase, lowercase, remove spaces" mode={mode} showAlert={showAlert}  />} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;