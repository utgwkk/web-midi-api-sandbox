import React from 'react';
import DJControllerSelector from './DJControllerSelector';

interface AppState {
  nowLoading: boolean;
  midiAccess?: WebMidi.MIDIAccess;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nowLoading: true
    }
  }

  componentDidMount() {
    // To prevent compile error
    if (navigator.requestMIDIAccess === undefined)
      throw new Error('Web MIDI API unavailable')

    navigator.requestMIDIAccess().then((midiAccess: WebMidi.MIDIAccess) => {
      this.setState({
        nowLoading: false,
        midiAccess
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Web MIDI API sandbox</h1>
        <DJControllerSelector
          inputs={!this.state.nowLoading && this.state.midiAccess !== undefined ? [...this.state.midiAccess.inputs] : []}
        />
      </div>
    );
  }
}

export default App;
