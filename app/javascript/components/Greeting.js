import React from "react"
class Greeting extends React.Component {
  render () {
    return (
      <h1>
        Greeting: {this.props.greeting}
      </h1>
    );
  }
}

export default Greeting
