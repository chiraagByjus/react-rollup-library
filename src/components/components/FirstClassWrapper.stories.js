import React from "react";
import FirstClassWrapper from "./FirstClassWrapper";

export default {
  title: "Onboarding module/Your First Class",
  component: FirstClassWrapper,
};

const template = (args) => <FirstClassWrapper {...args} />;

export const FirstClass = template.bind({});
FirstClass.args = {
  headingText: "Card Heading",
  color: "#5769f8",
};
