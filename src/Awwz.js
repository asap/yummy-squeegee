import React, { Component, PropTypes } from 'react';
import styles from './Awwz.css'

class Awwz extends Component {
  handleClick(e, aww) {
    e.preventDefault()
    this.props.onSelectAww(aww)
  }

  render () {
    let { awwz } = this.props;

    return (
      <ul className={styles.awwz} >
        {
          awwz.map((aww, index) =>
          <li className={styles.aww} key={index}>
            <a href="#" onClick={ e => {this.handleClick(e, aww) }}>
              <img className={styles.thumb} src={aww.thumb} />
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
