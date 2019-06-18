import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const getColorByCLevel = cLevel => {
  if (cLevel === 'LOW') return '#50D562';
  if (cLevel === 'MEDIUM') return '#FFDA23';
  if (cLevel === 'HIGH') return '#FF2323';
  return '#56C577';
};

const getPriority = cLevel => {
  if (cLevel === 'LOW') return 'Prioridade Baixa';
  if (cLevel === 'MEDIUM') return 'Prioridade Média';
  if (cLevel === 'HIGH') return 'Prioridade Alta';
  return null;
};

export default class ZoneItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }
  render() {
    const { zone } = this.props;
    return (
      <Fragment>
        <Button
          onClick={() => this.setState({ openModal: true })}
          style={{
            display: 'flex',
            flex: 1,
            borderLeft: '4px solid',
            borderLeftColor: getColorByCLevel(zone.cLevel),
            borderRadius: 0,
            backgroundColor: '#FFFFFF',
            marginTop: 30,
            textTransform: 'none',
            boxShadow: '-2px 14px 13px -14px rgba(0,0,0,0.71)'
          }}
        >
          <div style={{ display: 'flex', flex: 1 }}>
            <h3 style={{ marginTop: 16, marginBottom: 32, fontWeight: 'bold', color: '#707070' }}>
              Zona {zone.id} - Jaboatão Área Norte
            </h3>
          </div>
        </Button>
        <Modal
          BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%)`,
              backgroundColor: '#ffffff',
              width: '50%',
              height: '75%',
              boxShadow: '-2px 14px 13px -14px rgba(0,0,0,0.71)',
              outline: 'none',
              borderRadius: 15
            }}
          >
            <div
              style={{
                margin: 30,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 16,
                borderBottom: '1px solid #707070'
              }}
            >
              <h1 style={{ marginBottom: 0, color: '#707070', fontWeight: '700' }}>Zona {zone.id} - Jaboatão</h1>
              <h2 style={{ marginTop: 4, marginBottom: 4, color: '#707070', fontWeight: '700' }}>Área norte</h2>
              <div style={{ height: 5, width: '42%', backgroundColor: getColorByCLevel(zone.cLevel) }} />
              <h3 style={{ marginTop: 4, marginBottom: 4, color: '#707070', fontWeight: '500' }}>
                {getPriority(zone.cLevel)}
              </h3>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
