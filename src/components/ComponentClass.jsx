import { Button } from 'react-bootstrap';
import { Component } from 'react';


class ComponentClass extends Component {
  state = {monTexte:"Hello 4Twin7",value:0};
  handleClick=()=>{
    this.setState({
      value:this.state.value+1
    }) //changer le contenu du composant courant 
  }

  render() { 

    return (<>    
      {this.state.monTexte}
      Ceci un composant de classe
      <Button  variant="primary" onClick={this.handleClick}>Incrémenter</Button>
      <h2>{this.state.value}</h2>
      </>);

  }}

 

export default ComponentClass;