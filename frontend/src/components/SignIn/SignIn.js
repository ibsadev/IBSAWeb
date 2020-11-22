import React, { Component } from 'react';
import styled from 'styled-components'

const SignUpContainer = styled.div`
   width:60%;
   margin:3em auto;
   height:calc(100vh - 321px);
`

const Input = styled.input`
   margin:1em 0; 
`

export default class UserSignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
  }

  handleSubmit = (event) => {
     event.preventDefault();
     this.submit();
  }

  render() {
    const {
      email,
      password,
      errors,
    } = this.state;

    return (
      <SignUpContainer>
         <h1> Sign In </h1>
         <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Sign In</button>
         </form>
      </SignUpContainer>
    );
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
   * method to handle submit button for authenticating user.
   * - SUCCESS: redirects to a previously visited private Route
   * - ERROR: returns a JSON object key 'errors'
   */
  submit = () => {
    const { context } = this.props;
    const { email, password } = this.state;
    context.actions.signIn(email, password)
      .then( user => {
        if (user === null) {
          return { errors: [ 'Sign in was unsuccessful' ]}
        } 
      })
      .catch(err => {
        console.log(err)
        this.props.history.push('/error')
      })
  }

  /**
   * Redirect to home page upon clicking the cancel button.
   */
  cancel = () => {
    this.props.history.push('/');
  }
}

