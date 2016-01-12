import React, { Component, PropTypes } from 'react';

const defaultWrapperStyle = {
  position: 'relative',
  display: 'inline-block',
};

const defaultFontStyle = {
  whiteSpace: 'nowrap',
  fontSize: '100px',
  color: 'white',
};

const defaultActiveStyle = {
  ...defaultFontStyle,
  position: 'absolute',
  left: 0,
  top: 0,
  color: 'blue',
  overflow: 'hidden',
  zIndex: 1,
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
      width: percentage + '%',
    } : {
      ...defaultActiveStyle,
      width: percentage + '%',
    };

    return (
      <div style={wrapperStyle}>
        <div style={fontStyle}>{text}</div>
        <div style={activeStyle}>{text}</div>
      </div>
    );
  }
}

