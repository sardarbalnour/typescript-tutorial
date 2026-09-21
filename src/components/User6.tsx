import { useEffect } from "react";

function User6() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);

    console.log(user);
  }, []);

  return <div>User6</div>;
}

export default User6;

// as string is a type assertion in TypeScript that tells the compiler
// to treat the value returned by localStorage.getItem("user") as a string type.

// JSON.parse is a built-in JavaScript function that
// parses a JSON string and converts it into a JavaScript object.
// In this case,
//  it is used to convert the string retrieved from localStorage into an object that can be used in the code.
