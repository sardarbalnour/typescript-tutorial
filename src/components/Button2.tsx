type Button2props = {
  borderRadius: Record<string, number>;
};

function Button2({ borderRadius }: Button2props) {
  return (
    <div>
      <button>click me</button>
    </div>
  );
}

export default Button2;

// Record<string, number> is a TypeScript utility type that represents an object with string keys and number values.
// In this case, it is used to define the borderRadius prop of the Button2 component,
// allowing users to pass an object with specific border radius values for each corner of the button.
