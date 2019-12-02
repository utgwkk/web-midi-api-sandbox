import React from 'react';
import { DJControllerSelector, notSelectedKey } from './DJControllerSelector';

interface AppState {
  nowLoading: boolean;
  midiAccess?: WebMidi.MIDIAccess;
  currentControllerId?: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nowLoading: true
    }
  }

  componentDidMount() {
    if (navigator.requestMIDIAccess === undefined)
      throw new Error('Web MIDI API unavailable')

    this.selectController(notSelectedKey);

    this.requestMidiAccess();
  }

  requestMidiAccess() {
    navigator.requestMIDIAccess().then((midiAccess: WebMidi.MIDIAccess) => {
      this.setState({
        ...this.state,
        nowLoading: false,
        midiAccess
      });
    }).catch((err) => {
      throw err;
    });
  }

  selectController(id: string) {
    this.setState({
      ...this.state,
      currentControllerId: id
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Web MIDI API sandbox</h1>
          <div>current: {this.state.currentControllerId}</div>
          <DJControllerSelector
            inputs={
              !this.state.nowLoading && this.state.midiAccess !== undefined
                ? Array.from(this.state.midiAccess.inputs.values())
                : []
            }
            onChange={this.selectController.bind(this)}
          />
          <button onClick={() => this.requestMidiAccess()}>Refresh</button>
        </div>
      </div>
    );
  }
}

export default App;
