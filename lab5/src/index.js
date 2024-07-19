import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import parrot from './images/pic (1).jpg';
import User from './comments';
//import immages
import girlavatar from './images/avatar (1).png'
import businessavatar from './images/avatar (2).png'
import detectiveavatar from './images/avatar (3).png'


//creat content in the app using function component
const App = function(){
  //define variable a name
  let fullname = "Ahmad Karim";
  //decler a function
  function greeting(){
    return "Good Morning!"
  }
  return(
    <div>
      <h1 style={{textAlign: "center", color:"orange"}}>Welcome to React JS{fullname}</h1>
      <p>{greeting()} Lets be fimiliar with JSX element</p>
      <figure className='introimg'>
        <img  src={parrot}/>
      </figure>

      {/*---carrd--*/}
      <section className='card-container'>
        <User image={girlavatar} name='Peter' date='07/12/24' comments='Great Job!'/>
        <User image={businessavatar} name='sheikh' date='08/12/24' comments='007'/>
         <User image={detectiveavatar} name='detective' date='07/10/24' comments='Habibi!'/>

        
      </section>
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

