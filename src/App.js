import { useState } from "react";
import './App.css';
import Alert from "./component/Alert";
// import About from "./component/About";
import Navbar from './component/Navbar';
import Textform from "./component/Textform";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {

  const [mode, setMode] = useState('light')
  let toggleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style = 'background: #1d2025; color: white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light')
      document.body.style = 'background: white;';
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";

    }
  }



  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" about="About us" mode={mode} toggleDarkMode={toggleDarkMode} />
      {/* <Navbar/> */}
      <Alert alert={alert} />


      <div className="container">
        {/* <Routes> */}
          {/* <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
          {/* <Route path="/about" element={<About mode={mode} />} /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
