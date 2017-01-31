import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import KaraokeLyric from '../PercentageKaraokeLyric';

function setup(props) {
  const renderer = createRenderer();
  renderer.render(<KaraokeLyric {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}


it('should render default style correctly', () => {
  const { output } = setup({
    text: 'Test',
    percentage: 80,
  });

  expect(output.type).toBe('div');
  expect(output.props.style).toEqual({
    position: 'relative',
    display: 'inline-block',
  });

  const [defaultLyric, activeLyric] = output.props.children;

  expect(defaultLyric.type).toBe('div');
  expect(defaultLyric.props.children).toBe('Test');
  expect(defaultLyric.props.style).toEqual({
    whiteSpace: 'nowrap',
    fontSize: '60px',
    color: 'white',
    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
  });

  expect(activeLyric.type).toBe('div');
  expect(activeLyric.props.children).toBe('Test');
  expect(activeLyric.props.style).toEqual({
    whiteSpace: 'nowrap',
    fontSize: '60px',
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#1c1dbf',
    overflow: 'hidden',
    zIndex: 1,
    width: '80%',
    textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
  });
});

it('should can overwrite wrapper style', () => {
  const { output } = setup({
    text: 'Test',
    percentage: 80,
    wrapperStyle: {
      lineHeight: '2em',
    },
  });

  expect(output.type).toBe('div');
  expect(output.props.style).toEqual({
    position: 'relative',
    display: 'inline-block',
    lineHeight: '2em',
  });
});

it('should can overwrite font style', () => {
  const { output } = setup({
    text: 'Test',
    percentage: 80,
    fontStyle: {
      color: 'red',
    },
  });

  const [defaultLyric] = output.props.children;

  expect(defaultLyric.type).toBe('div');
  expect(defaultLyric.props.children).toBe('Test');
  expect(defaultLyric.props.style).toEqual({
    whiteSpace: 'nowrap',
    fontSize: '60px',
    color: 'red',
    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
  });
});

it('should can overwrite active style', () => {
  const { output } = setup({
    text: 'Test',
    percentage: 80,
    activeStyle: {
      color: 'red',
    },
  });

  const [, activeLyric] = output.props.children;

  expect(activeLyric.type).toBe('div');
  expect(activeLyric.props.children).toBe('Test');
  expect(activeLyric.props.style).toEqual({
    whiteSpace: 'nowrap',
    fontSize: '60px',
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    zIndex: 1,
    width: '80%',
    color: 'red',
    textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
  });
});
