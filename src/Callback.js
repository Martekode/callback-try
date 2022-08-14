import React , {useState} from "react";

const Callback = ({getColor}) => {
    const [activeColor, setActiveColor] = useState("");

    const handleChange = (e) =>{
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    };

    return (
        <input type="tect" id="input" aria-label="inpur" onChange={handleChange}value={activeColor}/>
    )
}
export default Callback;