import React from 'react';


import { Button, Container, Card, Col, Row, Form, CardImg } from 'react-bootstrap';

function Login() {
  return (
    <div>
      <Row>
        <Col>
        <img src="https://images.pexels.com/photos/3829230/pexels-photo-3829230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <h6>Don't have an account? <a href="/signup">Sign up</a></h6>
        </Col>
      </Row>
    </div>
  )
}

export default Login