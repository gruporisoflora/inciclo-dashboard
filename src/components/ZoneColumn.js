import React from 'react';
import ZoneItem from './ZoneItem';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { schedulePoda } from '../remote/axios';
import MoonLoader from 'react-spinners/MoonLoader';

function ListRender(podas) {
  const listItems = podas.map((poda, index) => <ZoneItem key={poda.id} zone={poda} />);
  return <div style={{ flexDirection: 'column', display: 'flex' }}>{listItems}</div>;
}

export default class ZoneColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, loading: false };
  }

  _shedulePodas = async () => {
    this.setState({ loading: true });
    const { podas } = this.props;
    await Promise.all(podas.map(poda => schedulePoda(poda.id)));
    this.setState({ openModal: false, loading: false });
    this.props.scheduleComplete();
  };

  render() {
    const { containerStyle, cLevel, podas, massiveScheduling } = this.props;
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
        {massiveScheduling && podas && podas.length > 0 && (
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => this.setState({ openModal: true })}
              style={{ marginRight: 20, flex: 1, border: '1px solid #707070' }}
            >
              <h3 style={{ color: '#707070', fontWeight: 'bold', marginTop: 8 }}>Agendar todas</h3>
            </Button>
            <Modal
              BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.4)' } }}
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
                    paddingBottom: 8
                  }}
                >
                  <h1 style={{ color: '#707070' }}>Confirmar agendamento?</h1>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: 70,
                      marginBottom: 70,
                      flex: 1,
                      justifyContent: 'space-around'
                    }}
                  >
                    {!this.state.loading && (
                      <Button
                        onClick={() => this._shedulePodas()}
                        style={{ padding: 20, borderRadius: 10, border: '1px solid #707070' }}
                      >
                        <h1 style={{ color: '#707070', marginLeft: 16, marginRight: 16, fontWeight: 'bold' }}>Sim</h1>
                      </Button>
                    )}
                    {!this.state.loading && (
                      <Button
                        onClick={() => this.setState({ openModal: false })}
                        style={{ padding: 20, borderRadius: 10, border: '1px solid #707070' }}
                      >
                        <h1 style={{ color: '#707070', marginLeft: 16, marginRight: 16, fontWeight: 'bold' }}>Não</h1>
                      </Button>
                    )}
                    {this.state.loading && (
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
                        <MoonLoader sizeUnit={'px'} size={150} color={'#56C577'} loading={this.state.loading} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
        {podas && ListRender(podas)}
      </div>
    );
  }
}
