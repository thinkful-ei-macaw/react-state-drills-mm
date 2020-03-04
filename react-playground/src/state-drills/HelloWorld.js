import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: 'world'
    }
  }

  handleClick = e => {
    this.setState({
      who:e 
    });
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.handleClick('world')}>World</button>
        <button onClick={() => this.handleClick('friend')}>Friend</button>
        <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    )
  }
}
export default HelloWorld;