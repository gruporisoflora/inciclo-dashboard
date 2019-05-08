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
  const listItems = data.map((poda, index) => <Area />);
  return (
    <div
      style={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: 20,
        display: 'space-between'
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
      results: {}
    };
  }

  async componentDidMount() {
    const resultado = await getPodas();
    console.log(resultado);
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
            style={{
              minWidth: 300,
              maxWidth: 600,
              justifyContent: 'center',
              justifyItems: 'center',
              alignItens: 'center'
            }}
          >
            <CardContent style={{ marginLeft: 32, marginRight: 32 }}>
              <ActionArea>
                {/* <div sytle={{ display: 'flex', flex: 10 }}>lala</div> */}
              </ActionArea>
              {this.state.results.data ? (
                <ListRender data={this.state.results.data} />
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
