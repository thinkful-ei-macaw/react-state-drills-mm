import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './state-drills/Accordion';

let arr = [{
  title: 'First',
  content: 'Lorem ipsum '
},
{
  title: 'Second',
  content: 'Lorem ipsum '
}]

ReactDOM.render(<Accordion sections={arr}/>, document.getElementById('root'));
