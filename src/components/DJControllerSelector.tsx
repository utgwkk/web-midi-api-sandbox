import React from 'react';
import DJControllerSelectorItem from './DJControllerSelectorItem';

const notSelectedKey = 'not-selected';

interface DJControllerSelectorProps {
  inputs: [string, WebMidi.MIDIInput][];
}

interface DJControllerSelectorState {
  selected: string;
}

class DJControllerSelector extends React.Component<DJControllerSelectorProps, DJControllerSelectorState> {
  constructor(props: DJControllerSelectorProps) {
    super(props);
    this.state = {
      selected: notSelectedKey
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    const key = event.target.value;
    console.log(`you selected ${key}`);
    this.setState({
      selected: key
    });
  }

  render() {
    return (
      <select onChange={this.handleChange}>
        <option value={notSelectedKey}>Select DJ controller</option>
        {
          this.props.inputs.map(([k, v]: [string, WebMidi.MIDIInput]) => {
            return <DJControllerSelectorItem key={k} itemKey={k} value={v} />
          })
        }
      </select>
    );
  }
}

export default DJControllerSelector;
