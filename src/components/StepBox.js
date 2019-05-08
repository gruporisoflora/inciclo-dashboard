import React from 'react';

export default class StepsBox extends React.Component {
  render() {
    const { cLevel, status, shouldIDisplay } = this.props;
    const getColorByCLevel = cLevel => {
      if (cLevel === 'LOW') return 'green';
      if (cLevel === 'MEDIUM') return 'yellow';
      if (cLevel === 'HIGH') return 'red';
      return 'lime';
    };
    const getStatusText = status => {
      if (status === 'DELAYED') return 'ATRASADO';
      if (status === 'DONE') return 'FEITO';
      if (status === 'SCHEDULED') return 'AGENDADO';
      return null;
    };
    return (
      <div
        style={{
          width: 100,
          height: 50,
          marginLeft: 8,
          marginRight: 8,
          backgroundColor: shouldIDisplay ? getColorByCLevel(cLevel) : 'grey',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 14,
          display: 'flex'
        }}
      >
        {shouldIDisplay ? getStatusText(status) : null}
      </div>
    );
  }
}
