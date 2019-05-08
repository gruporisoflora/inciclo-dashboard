import React from 'react';

export default class ActionArea extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#515151',
            marginLeft: 16,
            fontWeight: '600'
          }}
        >
          {this.props.areaName}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: 1
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#D2D2D2',
              fontSize: 110
            }}
          >
            [
          </div>

          {this.props.children || (
            <div
              style={{
                flex: 10,
                display: 'flex',
                fontWeight: 'bold',
                fontSize: 26,
                color: '#AEACAC',
                marginTop: 16,
                justifyContent: 'center'
              }}
            >
              CLIQUE NA ÁREA DESEJADA
            </div>
          )}

          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              color: '#D2D2D2',
              fontSize: 110
            }}
          >
            ]
          </div>
        </div>
      </div>
    );
  }
}
