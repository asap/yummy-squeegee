import React, { Component, PropTypes } from 'react';
import styles from './BigAww.css'

class BigAww extends Component {

  render () {
    let { aww } = this.props;

    return (
      <img className={ styles.main} src={aww.url} height={aww.height} width={aww.width} />
    );
  }
}

BigAww.proptypes = {
  source: PropTypes.string.isRequired
}

export default BigAww
