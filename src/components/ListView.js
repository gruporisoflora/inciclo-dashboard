import React from 'react';
import Area from './Area';

export default class ListView extends React.Component {

    constructor(props){
      super(props)
  
      this.listContainerRef = React.createRef()
      this.data = props.data
      this.listItems = this.data.map((poda, index) => (
        <Area onPress={() => props.onPress(index)} poda={poda} key={index} />
      ));
  
      this.state = {
        leftPadding:0
      }
    }
  
    componentDidMount(){
      this.setState({
        leftPadding:this.getMargin(this.listContainerRef.current.offsetWidth, 80,16)
      })
    }
  
    getMargin(containerWidth, itemWidth, margin){
      return (containerWidth %(itemWidth+(margin*2))) / 2
    }
  
    render(){
  
      const {leftPadding} = this.state
  
      return (
        <div ref={this.listContainerRef}
          style={{
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'left',
            marginTop: 32,
            paddingLeft: leftPadding + 'px'
          }}
        >
          {this.listItems}
        </div>
      );
    }
  }