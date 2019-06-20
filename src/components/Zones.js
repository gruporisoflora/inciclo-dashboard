import React from 'react';
import ZoneColumn from './ZoneColumn';
import { getPodas } from '../remote/axios';
import MoonLoader from 'react-spinners/MoonLoader';

// const mockedData = [
//   {
//     id: 1,
//     posts: [{ id: 1 }],
//     step: 'NEXT_TO_CABLE',
//     status: 'DONE',
//     cLevel: 'LOW'
//   },
//   {
//     id: 2,
//     posts: [{ id: 2 }],
//     step: 'NEXT_TO_CABLE',
//     status: 'DONE',
//     cLevel: 'HIGH'
//   },
//   {
//     id: 3,
//     posts: [{ id: 3 }],
//     step: 'CHECKED_TO_CUT',
//     status: 'SCHEDULED',
//     cLevel: 'MEDIUM'
//   },
//   {
//     id: 4,
//     posts: [{ id: 4 }],
//     step: 'CHECKED_TO_CUT',
//     status: 'SCHEDULED',
//     cLevel: 'HIGH'
//   },
//   {
//     id: 5,
//     posts: [{ id: 4 }],
//     step: 'CHECKED_TO_CUT',
//     status: 'DELAYED',
//     cLevel: 'HIGH'
//   },
//   {
//     id: 6,
//     posts: [{ id: 4 }],
//     step: 'CHECKED_TO_CUT',
//     status: 'SCHEDULED',
//     cLevel: 'HIGH'
//   },
//   {
//     id: 7,
//     posts: [{ id: 4 }],
//     step: 'CHECKED_TO_CUT',
//     status: 'IN_PROCESS',
//     cLevel: 'HIGH'
//   }
// ];

export default class Zones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowPodas: null,
      mediumPodas: null,
      highPodas: null,
      loading: true
    };
  }

  async componentDidMount() {
    await this._callRemote();
    const intervalId = setInterval(this._callRemote, 3000);
    this.setState({ intervalId: intervalId, loading: false });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  _callRemote = async () => {
    const { data } = await getPodas();
    console.log('request data', data);
    const filteredData = data && data.filter(poda => poda.step !== 'NEXT_TO_CABLE');
    console.log('filtered', filteredData);
    const lowPodas = filteredData && filteredData.filter(poda => poda.cLevel === 'LOW');
    const mediumPodas = filteredData && filteredData.filter(poda => poda.cLevel === 'MEDIUM');
    const highPodas = filteredData && filteredData.filter(poda => poda.cLevel === 'HIGH');
    console.log('Low podas', lowPodas);
    this.setState({ lowPodas, mediumPodas, highPodas });
  };

  render() {
    return (
      <div>
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
        {this.state.loading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}>
            <MoonLoader sizeUnit={'px'} size={150} color={'#56C577'} loading={this.state.loading} />
          </div>
        )}
      </div>
    );
  }
}
