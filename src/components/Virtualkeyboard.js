import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


import { Button, Container, Card, Col, Row } from 'react-bootstrap';

function Virtualkeyboard() {



  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };




  return (
    <div>
      <Row>
        <Col></Col>
      <Col sm={8} xs={12} md={8}>
      <Card>
        <Card.Body>
          <input className='inputcard'
            value={input}
            placeholder={"Tap on the virtual keyboard to start"}
            onChange={onChangeInput}
          />
        </Card.Body>
      </Card>
      </Col>
      <Col></Col>
      </Row>

      <Row>
        <Col></Col>
      <Col sm={8} xs={12} md={8}>
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
       </Col>
      <Col></Col>
      </Row>

    </div>
  )
}

export default Virtualkeyboard;