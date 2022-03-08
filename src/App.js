import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Button, Navbar, Container } from 'react-bootstrap';


//+++ import components +++
import Virtualkeyboard from "./components/Virtualkeyboard";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">TypingGazelle</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/login">Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <BrowserRouter>
        <Routes>
         <Route path = "/" element={<Virtualkeyboard /> } />
          <Route path="login/" element={<Login />} />
        </Routes>
      </BrowserRouter>


      

    </div>
  );
}

export default App;
