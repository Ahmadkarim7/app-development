import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//creat content in the app using function component
const App = function(){
  return(
    <div>
      <h1 style={{textAlign: "center", color:"orange"}}>Welcome to React JS</h1>
      <p>lets be fimiliar with JSX element</p>
      <figure>
        <img src='{parrot}'/>
      </figure>
    </div>
  )
}

//rooting the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

