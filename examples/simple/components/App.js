import React, { Component } from 'react';
import KaraokeLyric from 'react-karaoke-lyric';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <KaraokeLyric text="Hello World" percentage={80} />
        </div>
        <div>
          <KaraokeLyric text="Hello World" percentage={35} activeStyle={{
            color: '#e50906',
          }}
          />
        </div>
      </div>
    );
  }
}


export default App;
