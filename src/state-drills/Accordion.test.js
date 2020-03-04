import React from 'react';

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


  it('renders empty li given no sections', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={data} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={data} />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('component only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={data} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})