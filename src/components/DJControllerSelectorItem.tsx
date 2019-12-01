import React from 'react';

interface MIDIInput {
  manufacturer: string;
  name: string;
}

interface DJControllerSelectorItemProps {
  itemKey: string;
  value: MIDIInput;
}

const controllerName = (midiInput: MIDIInput) => `${midiInput.manufacturer} ${midiInput.name}`;

const DJControllerSelectorItem: React.FC<DJControllerSelectorItemProps> = (props) => (
  <option value={props.itemKey}>{controllerName(props.value)}</option>
);

export default DJControllerSelectorItem;
