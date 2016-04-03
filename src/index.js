import React, { Component, PropTypes } from 'react';

const defaultWrapperStyle = {
  position: 'relative',
  display: 'inline-block',
};

const defaultFontStyle = {
  whiteSpace: 'nowrap',
  fontSize: '60px',
  color: 'white',
  textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
};

const defaultActiveStyle = {
  ...defaultFontStyle,
  position: 'absolute',
  left: 0,
  top: 0,
  color: 'blue',
  overflow: 'hidden',
  zIndex: 1,
  textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
};

export default class KaraokeLyric extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    fontStyle: PropTypes.object,
    activeStyle: PropTypes.object,
    wrapperStyle: PropTypes.object,
  }

  render() {
    const { percentage, text } = this.props;
    let { wrapperStyle, fontStyle, activeStyle } = this.props;

    wrapperStyle = wrapperStyle ? {
      ...defaultWrapperStyle,
      ...wrapperStyle,
    } : defaultWrapperStyle;
    fontStyle = fontStyle ? {
      ...defaultFontStyle,
      ...fontStyle,
    } : defaultFontStyle;
    activeStyle = activeStyle ? {
      ...defaultActiveStyle,
      ...activeStyle,
      width: `${percentage}%`,
    } : {
      ...defaultActiveStyle,
      width: `${percentage}%`,
    };

    return (
      <div style={wrapperStyle}>
        <div style={fontStyle}>{text}</div>
        <div style={activeStyle}>{text}</div>
      </div>
    );
  }
}

