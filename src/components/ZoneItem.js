import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import seta from '../imgs/setina.png';

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

const ArvoresStep = props => (
  <div style={{ marginTop: 10, marginBottom: 8, opacity: props.active ? 1 : 0.4 }}>
    <h3 style={{ marginBottom: 4, color: '#707070', fontWeight: '700' }}>Árvores</h3>
    <div
      style={{
        display: 'flex',
        flex: 1,
        marginTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        borderBottom: '1px solid #808080'
      }}
    >
      <Button
        disabled={!props.active || props.zone.step !== 'GROWING'}
        style={{
          textTransform: 'none',
          borderRadius: 20,
          flex: 1,
          color: '#707070',
          border: '1px solid',
          borderColor: props.zone.step === 'GROWING' ? '#50D562' : 'transparent'
        }}
      >
        <h3>Crescendo</h3>
      </Button>
      <img style={{ marginLeft: 20, marginRight: 20 }} src={seta} alt="Seta" />
      <Button
        disabled={!props.active || !(props.zone.step === 'NEXT_TO_CABLE' && props.zone.cLevel !== 'HIGH')}
        style={{
          border: '1px solid',
          borderColor:
            props.zone.step === 'NEXT_TO_CABLE' && props.zone.cLevel !== 'HIGH'
              ? getColorByCLevel(props.zone.cLevel)
              : 'transparent',
          textTransform: 'none',
          borderRadius: 20,
          flex: 1,
          color: '#707070'
        }}
      >
        <h3>Observação</h3>
      </Button>
      <img style={{ marginLeft: 20, marginRight: 20 }} src={seta} alt="Seta" />
      <Button
        disabled={!props.active || !(props.zone.step === 'NEXT_TO_CABLE' && props.zone.cLevel === 'HIGH')}
        style={{
          border: '1px solid',
          borderColor:
            props.zone.step === 'NEXT_TO_CABLE' && props.zone.cLevel === 'HIGH'
              ? getColorByCLevel(props.zone.cLevel)
              : 'transparent',
          textTransform: 'none',
          borderRadius: 20,
          flex: 1,
          color: '#707070'
        }}
      >
        <h3>Crítico</h3>
      </Button>
    </div>
  </div>
);

const InspecaoAndPodaStep = props => (
  <div style={{ marginTop: 10, marginBottom: 8, opacity: props.active ? 1 : 0.4 }}>
    <h3 style={{ marginBottom: 4, color: '#707070', fontWeight: '700' }}>
      {props.type === 'IN_INPECTION' ? 'Inspeção' : 'Poda'}
    </h3>
    <div
      style={{
        display: 'flex',
        flex: 1,
        marginTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        borderBottom: '1px solid #808080'
      }}
    >
      <Button
        disabled={!props.active || props.zone.status !== 'SCHEDULED'}
        style={{
          border: '1px solid',
          borderColor:
            props.active && props.zone.status === 'SCHEDULED' ? getColorByCLevel(props.zone.cLevel) : 'transparent',
          textTransform: 'none',
          borderRadius: 20,
          flex: 1,
          color: '#707070'
        }}
      >
        <h3>Agendado</h3>
      </Button>
      <img style={{ marginLeft: 20, marginRight: 20 }} src={seta} alt="Seta" />
      <Button
        disabled={!props.active || props.zone.status !== 'IN_PROCESS'}
        style={{
          border: '1px solid',
          borderColor:
            props.active && props.zone.status === 'IN_PROCESS' ? getColorByCLevel(props.zone.cLevel) : 'transparent',
          textTransform: 'none',
          borderRadius: 20,
          flex: 1,
          color: '#707070'
        }}
      >
        <h3>Em processo</h3>
      </Button>
      <img style={{ marginLeft: 20, marginRight: 20 }} src={seta} alt="Seta" />
      <Button
        disabled={!props.active || !(props.zone.status === 'DONE' || props.zone.status === 'DELAYED')}
        style={{
          border: '1px solid',
          borderColor:
            props.active && (props.zone.status === 'DONE' || props.zone.status === 'DELAYED')
              ? getColorByCLevel(props.zone.cLevel)
              : 'transparent',
          textTransform: 'none',
          borderRadius: 20,
          flex: 1,
          color: '#707070'
        }}
      >
        <div>
          <h3
            style={{
              marginTop: props.active && props.zone.status === 'DONE' ? 4 : 16,
              marginBottom: props.active && props.zone.status === 'DONE' ? 4 : 16
            }}
          >
            {props.active && props.zone.status === 'DELAYED' ? 'Atrasado' : 'Realizado'}
          </h3>
          {props.active && props.zone.status === 'DONE' && (
            <h4 style={{ marginTop: 0, marginBottom: 4, fontWeight: 400 }}>
              Agendar {props.type === 'IN_INPECTION' ? 'poda' : 'verificação'}
            </h4>
          )}
        </div>
      </Button>
    </div>
  </div>
);

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
                paddingBottom: 8,
                borderBottom: '1px solid #707070'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ marginBottom: 0, color: '#707070', fontWeight: '700' }}>Zona {zone.id} - Jaboatão</h1>
                <Button onClick={() => this.setState({ openModal: false })}>
                  <h2 style={{ marginTop: 0, marginBottom: 0, color: '#707070' }}>X</h2>
                </Button>
              </div>

              <h2 style={{ marginTop: 4, marginBottom: 4, color: '#707070', fontWeight: '700' }}>Área norte</h2>
              <div style={{ height: 5, width: '42%', backgroundColor: getColorByCLevel(zone.cLevel) }} />
              <h3 style={{ marginTop: 4, marginBottom: 4, color: '#707070', fontWeight: '500' }}>
                {getPriority(zone.cLevel)}
              </h3>
            </div>
            <div style={{ marginLeft: 50, marginRight: 50 }}>
              <div>
                <ArvoresStep zone={zone} active={zone.step === 'GROWING' || zone.step === 'NEXT_TO_CABLE'} />
                {/* <InspecaoAndPodaStep zone={zone} type={'IN_INPECTION'} active={zone.step === 'IN_INPECTION'} /> */}
                <InspecaoAndPodaStep zone={zone} type={'CHECKED_TO_CUT'} active={zone.step === 'CHECKED_TO_CUT'} />
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
