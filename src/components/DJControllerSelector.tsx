import React from 'react';
import DJControllerSelectorItem from './DJControllerSelectorItem';

const notSelectedKey = 'not-selected';

interface DJControllerSelectorProps {
  inputs: WebMidi.MIDIInput[];
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
          this.props.inputs.map(input =>
            <DJControllerSelectorItem
              key={input.id}
              itemKey={input.id}
              value={input}
            />
          )
        }
      </select>
    );
  }
}

export default DJControllerSelector;
