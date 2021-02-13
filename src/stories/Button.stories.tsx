import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '@material-ui/core/Button';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
      fullWidth: true,
      disabled: true
  },
} as Meta;

const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
    fullWidth: false,
    disabled: false,
    variant: 'contained',
    color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    fullWidth: false,
    disabled: false,
    variant: 'contained',
    color: 'secondary'
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    disabled: false,
    color: 'primary'
};
