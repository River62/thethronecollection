import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import { GradientMask } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Gradient",
  component: GradientMask,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GradientMask>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GradientMask> = (args) => (
  <Container>
    <GradientMask>Gradient on text</GradientMask>
  </Container>
);

export const Default = Template.bind({});

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
