import React from 'react';
import DJControllerSelector from './DJControllerSelector';

interface AppState {
  nowLoading: boolean;
  midiAccess: any;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nowLoading: true,
      midiAccess: null
    }
  }

  componentDidMount() {
    // To prevent compile error
    const _navigator: any = navigator;
    if (_navigator.requestMIDIAccess === undefined)
      throw new Error('Web MIDI API unavailable')

    _navigator.requestMIDIAccess().then((midiAccess: any) => {
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
          inputs={!this.state.nowLoading ? [...this.state.midiAccess.inputs] : []}
        />
      </div>
    );
  }
}

export default App;
