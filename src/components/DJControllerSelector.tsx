import React from 'react';
import DJControllerSelectorItem from './DJControllerSelectorItem';

const notSelectedKey = 'not-selected';

interface DJControllerSelectorProps {
  inputs: WebMidi.MIDIInput[];
  onChange: (id: string) => void;
}

const DJControllerSelector: React.FC<DJControllerSelectorProps> = (props) => (
  <select onChange={e => props.onChange(e.target.value)}>
    <option value={notSelectedKey}>Select DJ controller</option>
    {
      props.inputs.map(input =>
        <DJControllerSelectorItem
          key={input.id}
          itemKey={input.id}
          value={input}
        />
      )
    }
  </select>
);

export { DJControllerSelector, notSelectedKey };
