type Button4Props<T> = {
  countValue: T;
  countHistory: T[];
};

function Button4<T>({ countValue, countHistory }: Button4Props<T>) {
  console.log(countValue);
  return (
    <div>
      <button>lemdaa</button>
      <p>Count History: {countHistory.join(", ")}</p>
    </div>
  );
}

export default Button4;

// This component is a generic button component that
// takes in a count value and a count history as props.
// The count value can be of any type, and the count history is an array of that same type.

// <T> is a generic type parameter that allows the component
// to accept any type for the count value and count history.
// This makes the component flexible and reusable for different data types.
