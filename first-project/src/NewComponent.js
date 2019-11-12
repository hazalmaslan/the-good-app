import React, { Component } from 'react';

class NewComponent extends Component {

  render() {
    return (
    <div>
        I'm {this.props.name}
    </div>
    )
  }
}

export default NewComponent;
