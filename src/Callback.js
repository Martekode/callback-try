import React , {useState} from "react";
import logo from "./logo.svg"

const Callback = ({getColor}) => {
    const [activeColor, setActiveColor] = useState("");

    const handleChange = (e) =>{
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    };

    return (
        <div style={{
            border: "1px solid white",
            borderRadius: "5px",
            width: "50%",
            marginTop: "1em",
            textAlign: "left",
        }} >
        
        <img alt="lel" style={{
            height: "1em",
        }} src={logo}></img>
            <input style={{
                width: "90%",
            }} type="text" id="input" aria-label="inpur" onChange={handleChange}value={activeColor}/>
        </div>
        
    )
}
export default Callback;