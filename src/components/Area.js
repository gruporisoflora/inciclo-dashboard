import React from 'react';
import Button from '@material-ui/core/Button';

export default class Area extends React.Component {
  render() {
    const { id, cLevel } = this.props.poda;

    const getColorByCLevel = cLevel => {
      if (cLevel === 'LOW') return '#56C577';
      if (cLevel === 'MEDIUM') return '#FF9C50';
      if (cLevel === 'HIGH') return '#FF6060';
      return '#56C577';
    };

    return (
      <Button
        style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          backgroundColor: getColorByCLevel(cLevel),
          color: '#2A1725',
          fontWeight: 'bold',
          margin: 16
        }}
        onClick={this.props.onPress}
      >
        <div> Área {id} </div>
      </Button>
    );
  }
}
