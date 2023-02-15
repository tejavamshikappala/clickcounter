import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="for_Outer_container">
        <div className="for_inner">
          <h1 className="forHeader">
            The Button has been clicked
            <span className="for_span"> {count}</span> times
          </h1>
          <p className="forParaa">Click the button to increase the count!</p>
          <button className="button-t" type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
