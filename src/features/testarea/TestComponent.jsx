import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from './testActions'
import {Button} from "semantic-ui-react"

const mapState = (state) => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;

    return (
      <div>
        <h1>Test page</h1>
        <h3>Your answer is: {data}</h3>
        <Button onClick={incrementCounter} content="increment" />
        <Button onClick={decrementCounter} content="decrement" />

      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
