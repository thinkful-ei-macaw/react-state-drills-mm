import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

import Accordion from './Accordion';

import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`Accordion Component`, () => {
  const data = [
    {
      title: "Something",
      content: "This is the content"
    },
    {
      title: "Another thing",
      content: "Some more content pls."
    }
  ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion sections={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders empty li given no sections', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={data} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})