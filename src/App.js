import { useState } from 'react';
import './App.css';
import Callback from './Callback'

function App() {
  const [UIcolor, setUIColor] = useState(null);

  //callback function
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>this is a test to check callback value passing to parent component</div>
        <p>write a color and the backround will change of the white box</p>
        <div className='lele' style={{background : `${UIcolor}`, border : "3px solid White" }}>

        </div>
        <Callback getColor={getColor} />
      </header>
    </div>
  );
}

export default App;
