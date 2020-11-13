import React, { Component } from 'react'
import styled from 'styled-components'

const SignUpContainer = styled.div`
   width:60%;
   margin:3em auto;
   height:calc(100vh - 321px);
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
                  type="text"
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
         console.log("User is creating..")
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
