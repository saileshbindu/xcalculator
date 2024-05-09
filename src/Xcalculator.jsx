import { useState } from "react";
import './xcalculator.css'

const Xcalculator = () =>{
  const [inputValue, setinputValue] = useState('')
  const [resVal, setResVal] = useState('');

  const handleButtonClick = (value) =>{
    setinputValue(inputValue + value)
  }

  const clearfun = () =>{
    setinputValue('')
    setResVal('')
  }

  const totalval = () =>{
    try {
      const result = eval(inputValue);
      setResVal(result.toString())
    } catch (error) {
      setResVal("Error")
    }
  }

  return(
    <div>
      <h1>React Calculator</h1>
      <input type='text' value={inputValue} />
      <div className="resvalu">{resVal}</div>

      <div className="numberButton">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={clearfun}>C</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={totalval}>=</button>
        <button onClick={() => handleButtonClick("/")}>/ </button>
      </div>
    </div>
  )
}

export default Xcalculator;