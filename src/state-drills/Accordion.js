import React from "react";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null
    }
  }

  static defaultProps = {
    sections: []
  };
  
  handleClick = (title) => {
    this.setState({
      activeSection: title
    })
  }

 
  render() {
    return (
    <ul>
      {this.props.sections.map(item => (
        <li>
        <button onClick={() => this.handleClick(item.title)}>{item.title}</button>
        {this.state.activeSection === item.title ? (<p>{item.content}</p>) : ''}
        </li>
      ))}
      </ul>
    );
  }
}
