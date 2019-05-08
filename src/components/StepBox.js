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
          flex: 1,
          height: 40,
          marginLeft: 4,
          marginRight: 4,
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
