import React from 'react';
import Button from '@material-ui/core/Button';

export default class Area extends React.Component {
  render() {
    return (

      <Button

        style={{
          width: 80,
          height: 80,
          backgroundColor: 'red',
          borderRadius: 20,
          margin: 16
        }}
        onClick={this.props.onPress}
      >
       
      </Button>
    );
  }
}
