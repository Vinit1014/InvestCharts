import React,{useState} from "react";
import "./radioButton.css";
import { useGlobalContext } from "../context";
const RadioButton = () => {
    const {setShowYearly,setisLoading} = useGlobalContext();
    const [selectedOption,setSelectedOption] = useState("yearly");
    const changeSpan = (event)=>{
        const show = event.target.value;
        setSelectedOption(show);
        
        if (show==="yearly") {
          setisLoading(true);
          setShowYearly(true);
        }
        else{
          setisLoading(true);
          setShowYearly(false);
        }
    }
  return (
    <div class="radio-inputs">
      <label onClick={changeSpan} className={`radio ${selectedOption === "yearly" ? "active": ""}`}>
        <input type="radio" name="radio" value="yearly" />
        <span class="name">Yearly</span>
      </label>
      <label onClick={changeSpan} className={`radio ${selectedOption === "quaterely" ? "active": ""}`}>
        <input type="radio" name="radio" value="quaterely" />
        <span class="name">Quaterely</span>
      </label>
    </div>
  );
};

export default RadioButton;
