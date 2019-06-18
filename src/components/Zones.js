import React from 'react';
import ZoneColumn from './ZoneColumn';
import getPodas from '../remote/axios';

const mockedData = [
  {
    id: 0,
    posts: [{ id: 0 }],
    step: 'GROWING',
    status: 'DONE',
    cLevel: 'LOW'
  },
  {
    id: 1,
    posts: [{ id: 1 }],
    step: 'NEXT_TO_CABLE',
    status: 'DONE',
    cLevel: 'LOW'
  },
  {
    id: 2,
    posts: [{ id: 2 }],
    step: 'NEXT_TO_CABLE',
    status: 'DONE',
    cLevel: 'HIGH'
  },
  {
    id: 3,
    posts: [{ id: 3 }],
    step: 'IN_INPECTION',
    status: 'SCHEDULED',
    cLevel: 'MEDIUM'
  },
  {
    id: 4,
    posts: [{ id: 4 }],
    step: 'IN_INPECTION',
    status: 'SCHEDULED',
    cLevel: 'HIGH'
  },
  {
    id: 5,
    posts: [{ id: 4 }],
    step: 'IN_INPECTION',
    status: 'SCHEDULED',
    cLevel: 'HIGH'
  },
  {
    id: 6,
    posts: [{ id: 4 }],
    step: 'IN_INPECTION',
    status: 'SCHEDULED',
    cLevel: 'HIGH'
  },
  {
    id: 7,
    posts: [{ id: 4 }],
    step: 'IN_INPECTION',
    status: 'SCHEDULED',
    cLevel: 'HIGH'
  }
];

export default class Zones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowPodas: null,
      mediumPodas: null,
      highPodas: null
    };
  }

  async componentDidMount() {
    const { data } = await getPodas();
    console.log('Resultado', data);
    const lowPodas = data.filter(poda => poda.cLevel === 'LOW');
    const mediumPodas = data.filter(poda => poda.cLevel === 'MEDIUM');
    const highPodas = data.filter(poda => poda.cLevel === 'HIGH');
    this.setState({ lowPodas, mediumPodas, highPodas });
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <ZoneColumn
          podas={this.state.highPodas}
          cLevel={'HIGH'}
          containerStyle={{ flexDirection: 'column', display: 'flex', flex: 1 }}
        />
        <ZoneColumn
          podas={this.state.mediumPodas}
          cLevel={'MEDIUM'}
          containerStyle={{ flexDirection: 'column', display: 'flex', flex: 1, marginLeft: 65, marginRight: 65 }}
        />
        <ZoneColumn
          podas={this.state.lowPodas}
          cLevel={'LOW'}
          containerStyle={{ flexDirection: 'column', display: 'flex', flex: 1 }}
        />
      </div>
    );
  }
}
