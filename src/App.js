import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hurray! You have successfully deploy React-auth-app using AWS Amplify.
          </p>
          <a
            className="App-link"
            href="https://md-danish-eng.github.io/Md-Danish-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Md Danish Portfolio
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
