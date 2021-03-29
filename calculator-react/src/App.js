import Canvas from './components/Canvas';
import Buttons from './components/Buttons';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    result:''
  }
};

  buttonPressed = buttonName =>{
    if(buttonName === '='){
      this.calculate();
    }else if(buttonName === 'CE'){
        this.reloadPage();
      }else {
    this.setState({
      result: this.state.result + buttonName,
    })}
  }

  calculate = () =>{
     try {this.setState({
        result: eval(this.state.result)
      })}catch(e){
        this.setState({
          result: ''
          })
      }
  }
   render(){
   return (
    <div className = "App">
      <div className ='calculator-body'>
      <Canvas result = {this.state.result}/>
      <Buttons buttonPressed = {this.buttonPressed}/>
      </div>
    </div>
  );
}
}

export default App;
