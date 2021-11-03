import React, { Component } from "react";
import "./login.css";


class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  loginfunc = e => {
    console.log(this.state.credentials);
    fetch('http://127.0.0.1:8000/auth/', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then(data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    ).catch(error => console.error(error))
  }



  registerfunc = e => {
    
    fetch('http://127.0.0.1:8000/Api/users/', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then(data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    ).catch(error => console.error(error))
  }

  inputChanged = e => {
    const cred = this.state.credentials;
    cred[e.target.name] = e.target.value;
    this.setState({credentials:cred});
  }

    render(){
        return (
            <div className="login">
              <h1>Login User Form</h1>
              
              <form>
              <label className="loginForm">
                  Username:
                    <input className="loginInput" type="text" name="username" 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}
                    />
              </label>
              <br/>

              <label>
                  Password:
                    <input className="loginInput" type="password" name="password"
                      value={this.state.credentials.password}
                      onChange={this.inputChanged}
                    />
              </label>
              
              <button onClick={this.loginfunc} className="loginButton" type="submit">Login</button>
              <button onClick={this.registerfunc} className="loginRegisterButton">Register</button>
              </form>

            </div>
            
          );

    }
 
}

export default Login;
