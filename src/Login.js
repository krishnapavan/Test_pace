import React, { Component } from 'react';
import fire from './config/Fire';
import firebase from 'firebase';

var db = firebase.firestore(); 

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      error:''
    };
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value });
    this.setState({error:'' })
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error.message);
        this.setState({error:error.message})
      });
  }

  signup(e){
    e.preventDefault();
    if (this.state.password.length < 6){
        console.log("Password should be more than 6 letters")
    }
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{
        console.log(u);
        db.collection("SignUps").doc(this.state.email).set({
            email: this.state.email,
            password: this.state.password
            
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    
    })
    .catch((error) => {
        console.log(error.message);
        this.setState({error:error.message})
      })
  }
  render() {
    return (
       <div className="col-md-6" > 
       <form>
      <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control " id="exampleInputPassword1" placeholder="Password" />
      </div>

      <div class="col-md-6">
            <small id="passwordHelp" class="text-danger">
              {this.state.error}
            </small>      
        </div>

      <button type="submit" onClick={this.login} class="btn btn-primary ">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
 </form>
 
 </div>
    );
  }
}
export default Login;