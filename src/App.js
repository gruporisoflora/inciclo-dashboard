import React from 'react';
import './App.css';
import getPodas from './remote/axios';
import StepLine from './components/StepsLine';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Artboard from './imgs/background.png';
import ActionArea from './components/ActionArea';
import AppHeader from './components/AppHeader';
import Area from './components/Area';
import Button from '@material-ui/core/Button';
import Zones from './components/Zones';

function ListRender(props) {
  const data = props.data;
  const listItems = data.map((poda, index) => <Area onPress={() => props.onPress(index)} poda={poda} key={index} />);
  return (
    <div
      style={{
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 32
      }}
    >
      {listItems}
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inFocus: null,
      results: {},
      tab: 0
    };
  }

  async componentDidMount() {
    const resultado = await getPodas();
    console.log('Resultado', resultado);
    this.setState({ results: resultado });
  }

  render() {
    return (
      <div className="App">
        <AppHeader tab={this.state.tab} onChangeTab={tab => this.setState({ tab })} />
        <div className="bodyWrapper" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="contentWrapper" style={{ width: '80%', height: '100%', margin: ' 0 auto 0 auto' }}>
            {this.state.tab === 0 && <Zones />}
          </div>
        </div>
      </div>
    );
  }
}
