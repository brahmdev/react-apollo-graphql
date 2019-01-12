import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.png'
import Launches from './components/Launches';
import Launch from './components/Launch';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <header className="App-header">
              <img src={logo} 
                    alt="SpaceX" 
                    style={{ width: 300, display: 'block', margin: 'auto'}}
              />
              <Route exact path="/" component={ Launches }></Route>
              <Route exact path="/launch/:flight_number" component={ Launch }></Route>
            </header>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
