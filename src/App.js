import React from 'react';
import './App.css';
import InputField from './components/atoms/InputField/InputField';
import AButton from './components/atoms/AButton/AButton';

//function App() {

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
        input: 0,
        output:'Converted Output...'
    }
     this.numerals=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    this.numerics=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  }
  /*set input value*/
  setInputValue = (property,value) =>{
    if(isNaN(value)){
      console.log("its not a number sorry");
      return;
    }else{
      if(value.length == 9){
        alert("JUST A SIDE NOTE: this number is quite long already")
      }
    this.setState({
      [property]: value
    })
  }
  }

  /*set output value*/
  setOutputValue = () =>{
    let outVar = this.calulate(this.state.input);
    this.setState({
      output: outVar
    })

  }
  /*calculate roman numerals value*/
  calulate =(num) => {
    let rNum = "";

    for(let x = 0; x<this.numerics.length; x++){
      while(num>=this.numerics[x]){
        rNum=rNum+this.numerals[x];
        num=num-this.numerics[x];
      }
      console.log(rNum);
    }
    return rNum;
  }

  resetForm =() =>{
    window.location.reload(false);
  }
  render(){
  return (
    <div className="app">
      <header className="app-header">
        <h1>Numb<span id="second-word">Vert</span></h1>
        <h3>number convertion to roman numerals</h3>
      </header>
      <main className="app-main">
        <InputField 
          type="numbers"
           value={this.state.input ? this.state.input : ''}
          onChange={(value) => this.setInputValue('input',value)}
          placeholder = "Number to Convert"
          maxLength="10" 
        />
        <div id="output-container">
          <p id="output" > {this.state.output}</p>
        </div>

        <AButton 
          text="CALCULATE"
          onClick={this.setOutputValue}
        /> 
        <AButton 
          text="RESET"
          onClick={this.resetForm}
        />
      </main>
    </div>
  );
}
}

export default App;
