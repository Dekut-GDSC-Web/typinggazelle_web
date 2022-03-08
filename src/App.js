import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Navbar, Container } from 'react-bootstrap';

//+++ import components +++
import Virtualkeyboard from "./components/Virtualkeyboard";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar>
  <Container>
    <Navbar.Brand href="#home">TypingGazelle</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="#login">Login</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
      {/* <Login /> */}
      <Virtualkeyboard />

    </div>
  );
}

export default App;
