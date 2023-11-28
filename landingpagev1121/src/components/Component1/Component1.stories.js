import { Component1 } from ".";

export default {
  title: "Components/Component1",
  component: Component1,
  argTypes: {
    property1: {
      options: ["closed", "opened"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "closed",
    className: {},
    line:
      "https://cdn.animaapp.com/projects/652581de01736f706d586056/releases/6531aac25a720c9e58e765a2/img/line-1-1.svg",
    img:
      "https://cdn.animaapp.com/projects/652581de01736f706d586056/releases/6531aac25a720c9e58e765a2/img/line-2-1.svg",
  },
};
