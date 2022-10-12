import { CheckBox } from "components";
export default {
  title: "kashif_s_application12/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", inputClassName: "mr-1" };
