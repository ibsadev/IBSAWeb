import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const SignUpContainer = styled.div`
   width:60%;
   padding-top: 20vh;
   margin-top: 0em;
   margin-left: 20vw;
   margin-right: 20vw;
   margin-bottom: 10vh;
`

const Input = styled.input`
   margin:1em 0; 
`

export default class SignUp extends Component {
   
   state = {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      phone : '',
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.submit();
   }
   
   render() {

   const {
      firstName,
      lastName,
      email,
      password,
      phone,
   } = this.state;

      return (
         <SignUpContainer>
            <h1> Sign Up </h1>
            <div>
               Already have an account? <Link to="/signin">Sign In!</Link>
            </div>
            <form onSubmit={this.handleSubmit}>
               <Input
                  id="firstName" 
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={this.change}
                  />
               <Input
                  id="lastName" 
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={this.change}
                  />
               <Input
                  id="email" 
                  name="email"
                  type="text"
                  placeholder="Email (g.ucla.edu or ucla.edu)"
                  value={email}
                  onChange={this.change}
                  />
               <Input
                  id="password" 
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.change}
                  />
               <Input
                  id="phone" 
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={this.change}
                  />
               <button type="submit">Sign Up</button>
            </form>
         </SignUpContainer>
      )
   }

   change = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      this.setState(() => {
        return {
          [name]: value
        };
      });
    }

   /**
   * method to handle creation of user using createUser
   * - SUCCESS : Redirects to the '/authenticated' path
   * - ERROR : returns a JSON error object.
   */
  submit = () => {
   const { context } = this.props;

   // Get data from state
   const {
      firstName,
      lastName,
      email,
      password,
      phone,
   } = this.state

   // New user payload
   const user = {
      firstName,
      lastName,
      email,
      password,
      phone,
   }

   context.data.createUser(user)
      .then( errors => {
         if (errors.length) {
            this.setState({ errors })
         } else { 
         context.actions.signIn(email, password)
            .then( () => {
               this.props.history.push('/')
            })
         }
      })
      .catch( err => { 
         console.log(err)
         this.props.history.push('/error')
      })
 }
}
