import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../src/App';

export default {
  title: 'UI/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = args => <App {...args} />;

export const Apps = Template.bind({});

App.arguments = {
  bgColor: 'red',
};
