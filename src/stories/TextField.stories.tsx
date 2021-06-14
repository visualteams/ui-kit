import {TextField,} from "@material-ui/core"
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'Example/TextField',
  component: TextField,
} as Meta;

const Template: Story = (args) => <TextField
    label={'Label'}
    {...args}></TextField>;

export const Classic = Template.bind({});
