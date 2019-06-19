import React from 'react';
import ZoneItem from './ZoneItem';

function ListRender(podas) {
  const listItems = podas.map((poda, index) => <ZoneItem zone={poda} />);
  return <div style={{ flexDirection: 'column', display: 'flex' }}>{listItems}</div>;
}

export default class ZoneColumn extends React.Component {
  render() {
    const { containerStyle, cLevel, podas } = this.props;

    const getTitle = cLevel => {
      if (cLevel === 'LOW') return 'Prioridade Baixa';
      if (cLevel === 'MEDIUM') return 'Prioridade Média';
      if (cLevel === 'HIGH') return 'Prioridade Alta';
      return null;
    };
    return (
      <div style={containerStyle}>
        <h4 style={{ color: '#C1C1C1', marginBottom: 0 }}>Áreas de</h4>
        <h2 style={{ color: '#707070', fontWeight: 'bold', marginTop: 8 }}>{getTitle(cLevel)}</h2>
        {podas && ListRender(podas)}
      </div>
    );
  }
}
