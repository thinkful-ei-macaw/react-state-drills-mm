import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    } 
  }
  static defaultProps = {
    bulletInChamber: 8
  }

  handleClick = e => {
    this.setState({
      spinningTheChamber: true
    });
    setTimeout(() => {
      let randomNum = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomNum,
        spinningTheChamber: false
      })
    }, 2000)
  }

  render() {
    let output = '';
    if(this.state.spinningTheChamber){
      output = 'spinning the chamber and pulling the trigger! ...';
    } else if(this.state.chamber === this.props.bulletInChamber){
      output = 'BANG!!!!';
    } else {
      output = 'you\'re safe!';
    }
    return (
      <div>
        <button onClick = {this.handleClick}>Pull the trigger!</button>
        <p>{output}</p>
      </div>
    )
  }
}
export default RouletteGun;