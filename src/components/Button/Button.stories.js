import React from "react";
import Button from "./Button";

export default {
  title: "form/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

Primary.storyName = "Primary Button";
Secondary.storyName = "Secondary Button";
Success.storyName = "Success Button";
Danger.storyName = "Danger Button";

const template = (args) => <Button {...args} />;

export const PrimaryA = template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};
export const SecondaryA = template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
export const SuccessA = template.bind({});
SuccessA.args = {
  variant: "success",
  children: "Success Args",
};
export const DangerA = template.bind({});
DangerA.args = {
  variant: "danger",
  children: "Danger Args",
};
