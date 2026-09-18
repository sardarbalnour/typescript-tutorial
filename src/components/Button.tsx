import type { ComponentProps } from "react";

type Button = ComponentProps<"button"> & {
  buttonTitle?: string;
};

function Button({ type, buttonTitle }: Button) {
  return <button type={type}>{buttonTitle || "click"}</button>;
}

export default Button;
