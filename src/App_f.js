import React from 'react'
import './App.css';
import InputField from './components/atoms/InputField/InputField';
import AButton from './components/atoms/AButton/AButton';
import {useSelector , useDispatch} from 'react-redux';
import {calculate, done} from './shared/actions';

function App_f() {
    let numerals=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let numerics=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const status = useSelector(state => state.output);
    const dispatch = useDispatch();

  let inputValue="temp";
  let outValue = 'Converted Output...';

    /*set input value*/
  const setInputValue = (value) =>{

    if(isNaN(value)){
      //console.log("its not a number sorry");
      alert(`WARNING: Sorry input: "${value}" is not a number`);
      resetForm();
    }else{
      if(value.length === 9){
        alert("JUST A SIDE NOTE: this number is quite long already")
      }
    inputValue=document.getElementById("myText").value;
  }
  }
  
    /*set output value*/
    const setOutputValue = () =>{
      console.log("input val " +inputValue);
      if(inputValue ==="temp"){
        alert("Error: Kindly Input something to convert.");
        return;
      }else{
        /*calculate and set to output to outvalue*/
        outValue = calulate(inputValue);
        /*display output*/
        document.getElementById("output").innerHTML = inputValue + " => " +outValue;
        document.getElementById("status-message").innerHTML = status;
        /*reset textbox*/
        document.getElementById("myText").value ='';


       //console.log("Stat Redux: " +status);
       dispatch(calculate());
       //console.log(outValue);

       setTimeout(()=>{dispatch(done());},6000);
      }
    }
  /*calculate roman numerals value*/
  const calulate =(num) => {
    let rNum = "";

    for(let x = 0; x<numerics.length; x++){
      while(num>=numerics[x]){
        rNum=rNum+numerals[x];
        num=num-numerics[x];
      }
     // console.log(rNum);
    }
    return rNum;
  }


  /*reset form*/
    const resetForm =() =>{
        window.location.reload(false);
      }

    return (
        <div className="app">
          <header className="app-header">
            <h1>Numb<span id="second-word">Vert</span></h1>
            <h3>number convertion to roman numerals</h3>
          </header>
          <main className="app-main">
            <InputField 
               id ="myText"
               type="numbers"
               
               onChange={(value) => setInputValue(value)}
               placeholder = "Number to Convert"
               maxLength="10" 
            />
            <div id="output-container">
              <p id="output" > {outValue} </p>
            </div>
    
            <AButton 
              id="calculate-btn"
              text="CALCULATE"
              //disabled={true}
               onClick={setOutputValue}
            /> 
            <AButton 
              text="RESET"
               onClick={resetForm}
            />

          </main>

          <div id="status-container">
                <label id="status-message">{status}</label>
            </div>
        </div>
      );
    
}

export default App_f
