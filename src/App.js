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
    <div id="listContainer"
      style={{
        flexWrap: 'wrap',
        
        display: 'flex',
        margin: 'auto'
        
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
    
    const container=  document.getElementById("listContainer");

    
    const podaItem = document.getElementsByClassName("podaItem")


    let style = window.getComputedStyle(document.getElementsByClassName('podaItem')[0]);


    const gridMargin = this.getMargin(container.offsetWidth,  80,16)

    container.style.paddingLeft= gridMargin + "px"


  }

  getMargin(containerWidth, itemWidth, margin){
    
    

    
    return (containerWidth %itemWidth) + margin/2
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
                <ListRender ref={this.listRenderRef}  data={this.state.results.data} />
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
