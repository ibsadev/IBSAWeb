import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TITLE = 'IBSA | Sign Up';

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
      errors : [],
      major: '',
      gradYear: ''
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.submit();
   }

   validateInput = (user) => {
      let errors = [];
      if (!user.email.includes('@g.ucla.edu') || !user.email.includes("@ucla.edu")) {
         errors.append("Email must be @g.ucla.edu or @ucla.edu")
      }
   }
   
   render() {

   const {
      firstName,
      lastName,
      email,
      password,
      phone,
      major,
      gradYear
   } = this.state;

      return (
         <SignUpContainer>
            <Helmet>
               <title>{TITLE}</title>
            </Helmet>
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
                  placeholder="Phone Number (optional)"
                  value={phone}
                  onChange={this.change}
                  />
               <Input
                  id="major" 
                  name="major"
                  type="text"
                  placeholder="Major"
                  value={major}
                  onChange={this.change}
                  />
               <Input
                  id="gradYear" 
                  name="gradYear"
                  type="text"
                  placeholder="Expected Grad Year"
                  value={gradYear}
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
   * @SUCCESS : Redirects to the home page
   * @ERROR : returns a JSON error object.
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