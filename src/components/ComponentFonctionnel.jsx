import { Button } from 'react-bootstrap';
import { Component, useState } from 'react';



    function ComponentFonct(params) {
        const [monTexte,setMonTexte]= useState("Hello Twin7") //useState is a hook , il permet d'initialiser un état
        const [value,setValue] = useState(0);
        const handleClick=()=>{
            setValue(value+1)
        }
        return (<>  
            {monTexte}  
            Ceci un composant de classe
            <Button  variant="primary" onClick={()=>handleClick()}>Incrémenter</Button>
            <h2>{value}</h2>
            </>);
        
    }
   
  

  

export default ComponentFonct