import React from 'react';
import './App.css';
import { getPodas } from './remote/axios';
import AppHeader from './components/AppHeader';
import Area from './components/Area';
import Zones from './components/Zones';
import Scheduling from './components/Scheduling';
import MapView from './components/MapView/MapView'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inFocus: null,
      tab: 0,
      width: '100vh',
      height: '100vh'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App" style={{ width: this.state.width, height: this.state.height }}>
        <AppHeader tab={this.state.tab} onChangeTab={tab => this.setState({ tab })} />
        <div className="bodyWrapper" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="contentWrapper" style={{ width: '80%', height: '100%', margin: ' 0 auto 0 auto' }}>
            {this.state.tab === 0 && <Zones />}
            {this.state.tab === 1 && <Scheduling />}
            {this.state.tab === 2 && <MapView/>}
          </div>
        </div>
      </div>
    );
  }
}
