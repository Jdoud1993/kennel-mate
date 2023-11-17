import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({onLogin}) {
  const [user_name, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [button, setButton] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    
    if (button === 1) {
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, password }),
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json().then((user) => onLogin(user));
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });}
    else {
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name,
          password
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });}
  }
  

  return (
    <div className="login" fixed="center">
      <h1>Welcome to Kennel Mate 2.0</h1>
      <Form onSubmit={handleSubmit}>
        <p>Please sign in below or sign up for an account</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={user_name} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Button style={{ margin: "5px" }} variant="secondary" type="submit" name="login" onClick={() => setButton(1)}>
          {isLoading ? "Loading..." : "Login"}
        </Button>
        <Button style={{ margin: "5px" }} variant="secondary" type="submit" name="signup" onClick={() => setButton(2)}>
          {isLoading ? "Loading..." : "Signup"}
        </Button>
      </Form>
      <h5 style={{color:"red"}}>
        {errors}
      </h5>
      <br></br>
    </div>
  );
}

export default Login;