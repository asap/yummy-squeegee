import React, { Component, PropTypes } from 'react';

class Awwz extends Component {
  handleClick(e, aww) {
    e.preventDefault()
    this.props.onSelectAww(aww)
  }

  render () {
    let { awwz } = this.props;

    return (
      <ul>
        {
          awwz.map((aww, index) =>
          <li key={index}>
            <a href="#" onClick={ e => {this.handleClick(e, aww) }}>
              <img src={aww.thumb} />
            </a>
          </li>
        )}
      </ul>
    );
  }
}

Awwz.propTypes = {
  awwz: PropTypes.array.isRequired,
  onSelectAww: PropTypes.func.isRequired
};

export default Awwz;
