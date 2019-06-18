import React from 'react';
import './App.css';
import getPodas from './remote/axios';
import StepLine from './components/StepsLine';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Artboard from './imgs/background.png';
import ActionArea from './components/ActionArea';
import Area from './components/Area';
import Button from '@material-ui/core/Button';

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
        <div className="App-wrapper">
          {/* header */}
          <div
            style={{
              display: 'flex',
              flex: 28,
              width: '100%',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', marginTop: 40, justifyContent: 'center' }}>
              <div style={{ display: 'flex', flex: 25 }} />
              <div style={{ display: 'flex', flex: 15 }}>logo</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flex: 81 }}>
                <Button onClick={() => this.setState({ tab: 0 })} style={{ fontSize: 16, textTransform: 'none' }}>
                  Zonas monitoras
                </Button>
                <Button onClick={() => this.setState({ tab: 1 })} style={{ fontSize: 16, textTransform: 'none' }}>
                  Agendamento
                </Button>
                <Button onClick={() => this.setState({ tab: 2 })} style={{ fontSize: 16, textTransform: 'none' }}>
                  Configurações
                </Button>
              </div>
              <div style={{ display: 'flex', flex: 34 }} />
              <div>PAULA</div>
              <div style={{ display: 'flex', flex: 25 }} />
            </div>
            <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>header footer</div>
          </div>
          {/* Body */}
          <div style={{ display: 'flex', flex: 72, width: '100%' }}>body</div>
        </div>
      </div>
    );
  }
}
