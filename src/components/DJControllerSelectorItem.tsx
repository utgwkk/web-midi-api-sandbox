import React from 'react';

interface DJControllerSelectorItemProps {
  itemKey: string;
  value: WebMidi.MIDIInput;
}

const controllerName = (midiInput: WebMidi.MIDIInput) => `${midiInput.manufacturer} ${midiInput.name}`;

const DJControllerSelectorItem: React.FC<DJControllerSelectorItemProps> = (props) => (
  <option value={props.itemKey}>{controllerName(props.value)}</option>
);

export default DJControllerSelectorItem;
