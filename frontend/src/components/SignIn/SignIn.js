import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TITLE = 'IBSA | Sign In';

const SignInContainer = styled.div`
   width:60%;
   padding-top: 30vh;
   margin-top: 0em;
   margin-left: 20vw;
   margin-right: 20vw;
   margin-bottom: 20vh;
`

const Input = styled.input`
   margin:1em 0; 
`

const ErrorContainer = styled.div`
  background-color: red;
  color: white;
  padding: 0.5em;
  margin: 1em 0;
  border-radius: 0.5em;
`

export default class UserSignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleSubmit = (event) => {
     event.preventDefault();
     this.submit();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    return (
      <SignInContainer>
        <Helmet>
           <title>{TITLE}</title>
         </Helmet>
         <h1> Sign In </h1>
         <ErrorsDisplay error={error}/>
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
               type="password"
               placeholder="Password"
               value={password}
               onChange={this.change}
               />
            <div>Don't have an account? <Link to="/signup">Sign Up!</Link></div>
            <div>
              <button button type="submit">Sign In</button>
            </div>
         </form>
      </SignInContainer>
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
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { email, password } = this.state;
    context.actions.signIn(email, password)
      .then( data => {
        if (data.success === false) {
          this.setState(() => {
            return {
              error: data.message
            }
          })
        }
        else {
          this.props.history.push(from)
        }
      })
      .catch(err => {
        console.log(err)
        this.props.history.push('/error')
      })
  }
}

function ErrorsDisplay(props) {
  let errorDisplay = null;
  console.log(props.error)
  if (props.error !== '') {
    errorDisplay = (
      <ErrorContainer>
        {props.error}
      </ErrorContainer>
    )
  }

  return errorDisplay
}

