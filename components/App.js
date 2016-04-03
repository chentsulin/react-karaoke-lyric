import React from 'react';
import KaraokeLyric from 'react-karaoke-lyric';
import CodeDisplay from './CodeDisplay';
import './App.css';

const code1 =
`
<KaraokeLyric text="Hello world" percentage="80" />
`;

const code2 =
`
<KaraokeLyric text="Hello World" percentage={35} activeStyle={{
  color: '#e50906',
}} />
`;

function App() {
  return (
    <div>
      <CodeDisplay code={code1} />
      <div>
        <KaraokeLyric text="Hello world" percentage="80" />
      </div>
      <CodeDisplay code={code2} />
      <div>
        <KaraokeLyric text="Hello World" percentage={35} activeStyle={{
          color: '#e50906',
        }}
        />
      </div>
    </div>
  );
}

export default App;
