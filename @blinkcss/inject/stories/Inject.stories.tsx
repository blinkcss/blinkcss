import { inject as srcInject } from "../src";
import { DivProps, Meta, StoryObj } from "@playgrounds/storybook";

const meta: Meta<DivProps & { inject?: string }> = {
  args: {
    children: "Children",
    className: "className",
    inject: ".className{background-color:red;}",
  },
  render: ({ children, className, inject, ...props }) => {
    if (inject) srcInject(inject);
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  },
  title: "Inject",
};

export default meta;

export const Default: StoryObj<HTMLDivElement> = {};
