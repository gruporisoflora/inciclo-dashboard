import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';

const AppHeader = props => (
  <div className="header" style={{ width: '100%', padding: '0 auto 0 auto', zIndex: 3 }}>
    <div style={{ width: '80%', height: '100%', margin: '0 auto' }}>
      <div className="header_menu" style={{ padding: '50px 0 50px 0' }}>
        <ul style={{ padding: 0, textAlign: 'left', display: 'flex', alignItems: 'center' }}>
          <li style={{ padding: '0', marginRight: '100px' }}>logo</li>
          <li className="menuItem">
            <Button
              onClick={() => props.onChangeTab(0)}
              style={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#707070',
                opacity: props.tab === 0 ? 1 : 0.35
              }}
            >
              Zonas monitoras
            </Button>
          </li>
          <li className="menuItem">
            <Button
              onClick={() => props.onChangeTab(1)}
              style={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#707070',
                opacity: props.tab === 1 ? 1 : 0.35
              }}
            >
              Agendamento
            </Button>
          </li>

          <li className="menuItem">
            <Button
              onClick={() => props.onChangeTab(2)}
              style={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#707070',
                opacity: props.tab === 2 ? 1 : 0.35
              }}
            >
              Configurações
            </Button>
          </li>

          <li style={{ padding: '0 !important', display: 'flex', flex: 1, justifyContent: 'flex-end' }}>PAULA</li>
        </ul>
      </div>

      <div className="header_indicator" style={{ textAlign: 'left' }}>
        <h2>Zonas monitoras</h2>
        <h3>Monitoramento de podas</h3>
      </div>
    </div>
  </div>
);

export default AppHeader;
