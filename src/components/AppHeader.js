import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../imgs/icon.png';

const AppHeader = props => (
  <div className="header" style={{ width: '100%', padding: '0 auto 0 auto', zIndex: 3 }}>
    <div style={{ width: '80%', height: '100%', margin: '0 auto' }}>
      <div className="header_menu" style={{ padding: '50px 0 50px 0' }}>
        <ul style={{ padding: 0, textAlign: 'left', display: 'flex', alignItems: 'center' }}>
          <li style={{ padding: '0', marginRight: '100px' }}>
            <img src={logo} alt="Logo" />
          </li>
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
              <h3>Zonas monitoras</h3>
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
              <h3>Agendamento</h3>
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
              <h3>Configurações</h3>
            </Button>
          </li>

          <li style={{ padding: '0 !important', display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <div
              style={{
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #707070'
              }}
            >
              <h1 style={{ color: '#707070', fontWeight: 'bold' }}>P</h1>
            </div>
          </li>
        </ul>
      </div>

      <div className="header_indicator" style={{ textAlign: 'left' }}>
        <h2 style={{ color: '#707070', fontWeight: 'bold' }}>Zonas monitoras</h2>
        <h3 style={{ color: '#707070', fontWeight: '500' }}>Monitoramento de podas</h3>
      </div>
    </div>
  </div>
);

export default AppHeader;
