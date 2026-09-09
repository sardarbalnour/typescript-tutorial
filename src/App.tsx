function App() {
  let name: string = "TypeScript";
  console.log(name);
  name = "React + TypeScript";

  let counter: number = 0;
  console.log(counter);
  counter = 1;

  let flag: boolean = true;
  console.log(flag);
  flag = false;

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Counter: {counter}</p>
      <p>Flag: {flag.toString()}</p>
    </>
  );
}

export default App;
