import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.style.color = 'white';
    }else{
      setMode('light');

      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }



  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Form heading="Enter Text to Analyze" mode={mode} />
    </>
  );
}

export default App;
