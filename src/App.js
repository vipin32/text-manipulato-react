import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';


function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us" />
      <Form heading="Enter Text to Analyze" />
    </>
  );
}

export default App;
