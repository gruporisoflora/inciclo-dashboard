import React from 'react';

export default class StepsBox extends React.Component {
  render() {
    const { cLevel, status, shouldIDisplay, stepName } = this.props;
    const getColorByCLevel = cLevel => {
      if (cLevel === 'LOW') return '#56C577';
      if (cLevel === 'MEDIUM') return '#FF9C50';
      if (cLevel === 'HIGH') return '#FF6060';
      return '#56C577';
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
          height: 50,
          marginLeft: '4px',
          marginRight: '4px',
          backgroundColor: shouldIDisplay ? getColorByCLevel(cLevel) : 'grey',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2A1725',
          fontWeight: 'bold',
          fontSize: '0.5em',
          paddingLeft: '2px',
          paddingRight: '2px',
          display: 'flex'
        }}
      >
        {stepName}
        {/* {shouldIDisplay ? getStatusText(status) : null} */}
      </div>
    );
  }
}
