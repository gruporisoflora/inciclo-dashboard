import React from 'react';
import logo from './logo.svg';
import './App.css';
import getPodas from './remote/axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'JEAN',
      results: {}
    };
  }

  async componentDidMount() {
    const resultado = await getPodas();
    console.log(resultado);
    this.setState({ userName: 'Caio', results: resultado });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.{' '}
            {this.state.userName}
          </p>
          {console.log('results', this.state.results)}
          <p>
            {this.state.results.data ? this.state.results.data[0].title : null}
          </p>
          <p>
            {this.state.results.data ? this.state.results.data[0].body : null}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
