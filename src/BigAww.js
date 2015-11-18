import React, { Component, PropTypes } from 'react';

class BigAww extends Component {

  render () {
    let { aww } = this.props;

    return (
      <img src={aww.url} height={aww.height} width={aww.width} />
    );
  }
}

BigAww.proptypes = {
  source: PropTypes.string.isRequired
}

export default BigAww
