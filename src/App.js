import React from 'react';
import './App.css';
import getPodas from './remote/axios';
import StepLine from './components/StepsLine';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Artboard from './imgs/background.png';
import ActionArea from './components/ActionArea';
import Area from './components/Area';

function ListRender(props) {
  const data = props.data;
  const listItems = data.map((poda, index) => (
    <Area onPress={() => props.onPress(index)} poda={poda} key={index} />
  ));
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
      results: {}
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
        <div
          className="App-header"
          style={{
            backgroundImage: `url(${Artboard})`,
            backgroundSize: 'cover',
            overflow: 'hidden'
          }}
        >
          <Card
            className="App-card-wrapper"
            style={{
              justifyContent: 'center',
              justifyItems: 'center',
              alignItens: 'center'
            }}
          >
            <CardContent style={{ marginLeft: 32, marginRight: 32 }}>
              <ActionArea
                areaName={
                  this.state.inFocus
                    ? this.state.results.data[this.state.inFocus - 1].id
                    : null
                }
              >
                {this.state.inFocus && (
                  <div
                    style={{
                      flex: 10,
                      display: 'flex',
                      marginTop: 16
                    }}
                  >
                    <StepLine
                      step={
                        this.state.results.data[this.state.inFocus - 1].step
                      }
                      cLevel={
                        this.state.results.data[this.state.inFocus - 1].cLevel
                      }
                      status={
                        this.state.results.data[this.state.inFocus - 1].status
                      }
                    />
                  </div>
                )}
              </ActionArea>
              {this.state.results.data ? (
                <ListRender
                  onPress={index => this.setState({ inFocus: index + 1 })}
                  data={this.state.results.data}
                />
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
