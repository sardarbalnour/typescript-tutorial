const convertToArray = <T,>(value: T): T[] => {
  return [value];
};

// function convertToArray<T>(value: T): T[] {
//   return [value];
// }

convertToArray(5);
convertToArray("hello");

function Button3() {
  return (
    <div>
      <button>clickkkkk meee</button>
    </div>
  );
}

export default Button3;

// The `convertToArray` function is a generic utility function
// that takes a value of any type `T` and returns an array containing that value.
// The function is called with both a number (`5`) and a string (`"hello"`),
// demonstrating its flexibility to handle different types.

// T is a placeholder for any type,
// allowing the function to be used with various data types while maintaining type safety.

// generic functions are a powerful feature in TypeScript
// that enable developers to write reusable and type-safe code.

// <T,> is the syntax used to define a generic type parameter in TypeScript.

// (value: T): T[] => { ... } specifies
// that the function takes a parameter of type T and returns an array of type T.
