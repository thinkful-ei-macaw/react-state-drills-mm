import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render(){
    let output = "";
    if (this.state.count < 8) {
      if (this.state.count % 2 === 0) {
        output = "tick";
      } else {
        output = "tock";
      }
    } else {
      output = "BOOM!!!!";
      clearInterval(this.interval);
    }
    return (
      <div>
        <p>
          {output}
        </p>
      </div>
    )
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}

export default Bomb;