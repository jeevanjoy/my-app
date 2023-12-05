import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter ,
  
  Route,
  Routes
  
} from "react-router-dom";
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [mode1, setMode1] = useState('light')
  const showAlert =(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
    
  }
  const togglemode = ()=>{
    if(mode=== 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#6c757d'
      showAlert("Dark mode is enabled","success")
     
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled","success")
     
    }
  }
  const togglemode1 = ()=>{
    if(mode1=== 'light')
    {
      setMode1('red')
      document.body.style.backgroundColor='red'
      showAlert("Dark mode is enabled","success")
     
    }
    else
    {
      setMode1('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled","success")
     
    }
  }
  return (
    <>
  <BrowserRouter>
<Navbar   title="CodingJourney"  about="About" mode={mode}  togglemode={togglemode} mode1={mode1} togglemode1={togglemode1}/>
<Alert alert={alert}/>
<div className="container my-4">
<Routes>
          <Route path="/about"  element={<About />}>
           
          </Route>
          <Route path="/" element={ <TextForm heading="Enter the Text Analyze" mode={mode} showAlert={showAlert}mode1={mode1} togglemode={togglemode}  togglemode1={togglemode1}/>}>
         

           
          </Route>
        </Routes>
  
</div>
</BrowserRouter>

    </>
  );
}

export default App;
