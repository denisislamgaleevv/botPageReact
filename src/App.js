import {React, useEffect} from 'react'
import './App.css';
import monkey from './pictures/1.jpg'
const tg = window.Telegram.WebApp; 

function App() {
  useEffect(()=>{
    tg.ready()
  }, [])
  const closeEvent =()=>{
    tg.close()
  }
  return (
    <div className="App">
      <div className='container'>  
       <h1>It's work</h1>
       <img src ={monkey} width ="300px" height = "400px"/>
       <button onClick = {closeEvent}>Закрыть</button>
       </div>
    </div>
  );
}

export default App;
