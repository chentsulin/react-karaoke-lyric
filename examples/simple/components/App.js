import React, { Component } from 'react';
import KaraokeLyric from 'react-karaoke-lyric';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <KaraokeLyric text="Try Everything" percentage={80} />
        </div>
        <div>
          <KaraokeLyric text="你目光獨有的溫暖" percentage={35} activeStyle={{
            color: '#e50906',
          }}
          />
        </div>
      </div>
    );
  }
}


export default App;
