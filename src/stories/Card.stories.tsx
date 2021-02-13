import {Card, CardContent} from "@material-ui/core"
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => <Card {...args}><CardContent>Content of the card</CardContent></Card>;

export const Classic = Template.bind({});
