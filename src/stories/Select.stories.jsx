import React from 'react';

import { Select } from '../components/select';

export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {
    type: { control: { type: "select", options: ["single", "multi"] }},
  },
};

const Template = (args) => <Select {...args} />;

export const Multi = Template.bind({});
Multi.args = {
  type: 'multi',
  options: [ 
		{label: 'option 1', value: '1'}, 
		{label: 'option 2', value: '2'},
		{label: 'option 3', value: '3'},
		{label: 'option 4', value: '4'}
	],
  showAlert: false,
  defaultMsg: 'No items selected'
};

export const Single = Template.bind({});
Single.args = {
  type: 'single',
  options: [ 
		{label: 'option 1', value: '1'}, 
		{label: 'option 2', value: '2'},
		{label: 'option 3', value: '3'},
		{label: 'option 4', value: '4'}
	],
  showAlert: false,
  defaultMsg: 'No items selected',
};


