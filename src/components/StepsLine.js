import React from 'react';
import StepBox from './StepBox';

export default class StepsLine extends React.Component {
  render() {
    const { step, cLevel, status } = this.props;
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'collumn',
          justifyContent: 'center'
        }}
      >
        <StepBox
          shouldIDisplay={step === 'GROWING'}
          cLevel={cLevel}
          status={status}
        />
        <StepBox
          shouldIDisplay={step === 'NEXT_TO_CABLE'}
          cLevel={cLevel}
          status={status}
        />
        <StepBox
          shouldIDisplay={step === 'IN_INPECTION'}
          cLevel={cLevel}
          status={status}
        />
        <StepBox
          shouldIDisplay={step === 'CHECKED_TO_CUT'}
          cLevel={cLevel}
          status={status}
        />
      </div>
    );
  }
}
