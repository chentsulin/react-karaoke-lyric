import React, { Component } from 'react';
import { PercentageKaraokeLyric } from 'react-karaoke-lyric'; // eslint-disable-line


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <PercentageKaraokeLyric text="Try Everything" percentage={80} />
        </div>
        <div>
          <PercentageKaraokeLyric
            text="你目光獨有的溫暖"
            percentage={35}
            activeStyle={{
              color: '#e50906',
            }}
          />
        </div>
      </div>
    );
  }
}


export default App;
