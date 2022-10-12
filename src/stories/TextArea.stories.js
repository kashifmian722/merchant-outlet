import { TextArea } from "components";
export default {
  title: "kashif_s_application12/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineIndigo50",
  size: "sm",
  placeholder: "placeholder",
};
