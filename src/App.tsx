import Prop from "./components/Prop";

type User2 = { name: string; age: number };
type ArrMix = (string | number)[];

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

  const arr = [1, "s", false];

  const arr2: number[] = [2, 3, 4];
  const arr3: string[] = ["x"];

  // const arrMix: (string | number)[] = [1, "s"];
  const arrMix: ArrMix = [1, "s"];

  const obj = { name: "ali", age: 22, color: "white" };

  // const obj2: { name: string; age: number } = { name: "sardar", age: 26 };
  const obj2: User2 = { name: "sardar", age: 26 };

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Counter: {counter}</p>
      <p>Flag: {flag.toString()}</p>

      <Prop name="sardar" age={26} hasPet={true} />
    </>
  );
}

export default App;
