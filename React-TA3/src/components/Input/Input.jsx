import React, {useState} from "react";
import Styles from "./index.module.css";

const Input = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Escribí pa..." 
        />
        <p>{inputValue}</p>
      </div>
    );
  };
  
  export default Input;