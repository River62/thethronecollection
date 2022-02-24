import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import { Card } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Container>
    <StyledCard {...args} />
  </Container>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  url: "https://google.be",
  imageUrl: "https://source.unsplash.com/500x400",
};

export const NotClickable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotClickable.args = {
  imageUrl: "https://source.unsplash.com/500x400",
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  max-width: 400px;
`;
