import React, { Component } from 'react';
import KaraokeLyric from 'react-karaoke-lyric';


class App extends Component {
  render() {
    return (
      <div>
        <KaraokeLyric text="Hello World" percentage={80} />
      </div>
    );
  }
}


export default App;
