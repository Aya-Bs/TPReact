import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import Form from './components/Form'; // Importez Form depuis le bon chemin
import Counter  from './components/counter';
import render from './components/ComponentClass'
import ComponentClass from './components/ComponentClass';
import ComponentFonct from './components/ComponentFonctionnel';
import Timer from './components/Timer';
import TextInputFocus from './components/ComponentRef';
import Event from './components/Event';
import Events from './components/Events';

import React, { useState, useEffect } from 'react'; 


function App() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([]);

 
//ffc composant fonctionnel
//cc composant classe
  return (
    <>
       <Events/>

    </>
    );
  }
    export default App; 

    /*
    <>
    
      <Hello />
      <Form labelle="FirstName" Name="FirstName" />
      <Form labelle="LastName" Name="LastName" />
      <br/>
      <ComponentClass/>
      <ComponentFonct/>
      <Counter/>
      <Timer/>
      <TextInputFocus/>
      <Counter/>
    </>
    */
    
  
  /*
}
function Appcounter() {
  return (
    <div>
      <h1>Compteur</h1>
      
      <Counter initialCount={0} step={1} />
    
    </div>
  );*/

/*

import ListManager from './components/ListManager'; // Importez le composant ListManager

function AppList() {
  // Liste initiale des éléments
  const initialItems = ['React', 'Angular', 'VueJs'];

  return (
    <div>
      <h1>  Gestionnaire de liste</h1>
   
      <ListManager variant="primary" initialItems={initialItems} placeholder="Ajouter a la liste" />
    </div>
  );
}
function ComponentClass(){
  return <div>  </div>
}

export default ComponentClass;

*/

  /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
      