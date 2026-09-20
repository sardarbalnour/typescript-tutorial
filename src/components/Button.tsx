import type { ComponentProps } from "react";
// ComponentProps is a utility type that extracts the props of a given component type.
//  In this case, it is used to extract the props of the "button" HTML element.
//  The Button component extends these props and adds an optional buttonTitle prop,
//  which allows for customizing the button's text. If buttonTitle is not provided, it defaults to "click".

// ComponentPropsWithRef is a utility type that extracts the props of a given component type, including the ref prop.

// ComponentPropsWithoutRef is a utility type that extracts the props of a given component type, excluding the ref prop.

type Button = ComponentProps<"button"> & {
  buttonTitle?: string;
};

function Button({ type, buttonTitle }: Button) {
  return <button type={type}>{buttonTitle || "click"}</button>;
}

export default Button;
