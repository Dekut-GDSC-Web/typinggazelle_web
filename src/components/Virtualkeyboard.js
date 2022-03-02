import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';




function Virtualkeyboard() {

    //hooks
    const [state, setState] = useState("");


    //functions
    var onChange = (input) => {
      console.log("Input changed", input);
    }
  
    var onKeyPress = (button) => {
      console.log("Button pressed", button);
    }
  


  return (
    <div>
     <Keyboard
        onChange={onChange()}
        onKeyPress={onKeyPress()}
      />
    </div>
  )
}

export default Virtualkeyboard;