import { Select, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Example/Select",
  component: Select,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 500 }}>
    <FormControl {...args}>
      <InputLabel id="demo-simple-select-label">Label</InputLabel>
      <Select labelId={"demo-simple-select-label"} />
    </FormControl>
  </div>
);

export const Classic = Template.bind({});
Classic.args = {
  fullWidth: true,
  disabled: false,
};
