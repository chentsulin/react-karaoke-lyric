import React, { Component, PropTypes } from 'react';
import Prism from './prism';
import './prism.css';

class CodeDisplay extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { code } = this.props;
    return (
      <div style={{ height: '150px', fontSize: 14 }}>
        <pre style={{
          boxSizing: 'border-box',
          height: 'inherit',
          margin: 0,
          paddingLeft: 30,
        }}
        >
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    );
  }
}


export default CodeDisplay;
