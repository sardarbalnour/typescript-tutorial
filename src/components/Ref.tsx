import { useRef } from "react";

function Ref() {
  const ref = useRef<HTMLButtonElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(ref.current?.innerText);
  };

  return (
    <div>
      <button ref={ref} onClick={handleClick}>click</button>

      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Ref;

// useRef type is a generic type that allows you
// to create a mutable reference to a DOM element or a value in React.
// It provides a way to access and manipulate the underlying DOM element or value directly,
// without triggering re-renders. In this case,
// useRef<HTMLButtonElement> creates a reference to a button element,
// and useRef<HTMLInputElement> creates a reference to an input element.
