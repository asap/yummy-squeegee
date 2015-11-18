import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getThaAwwz, currentAww, selectAww } from './actions'
import Awwz from './Awwz.js'
import BigAww from './BigAww.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.getMoar = this.getMoar.bind(this)
  }

  componentDidMount() {
    const { dispatch, awwz } = this.props
    dispatch(getThaAwwz(awwz))
  }

  componentWillReceiveProps() {
  }

  getMoar () {
  }

  render () {
    const { awwz, currentAww, isFetching, dispatch } = this.props

    return (
      <div>
        <BigAww aww={currentAww} />
        {isFetching && awwz.length === 0 &&
          <h2>IZ LOADING</h2>
        }
        {!isFetching && awwz.length === 0 &&
          <h2>NO CAN HAZ</h2>
        }
        {awwz.length > 0 &&
          <Awwz awwz={awwz} onSelectAww={index =>
            dispatch(selectAww(index))
          } />
        }
        <button onClick={this.getMoar}>MOAR AWWZ</button>
      </div>
    );
  }
}

App.propTypes = {
  awwz: PropTypes.array.isRequired,
  currentAww: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const { awwz, currentAww } = state
  const {
    isFetching
  } = {
    isFetching: false
  }

  return {
    awwz: awwz.items,
    currentAww,
    isFetching,
  }
}

export default connect(mapStateToProps)(App)
