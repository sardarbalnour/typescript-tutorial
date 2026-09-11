function Prop(props: {
  name: string;
  age: number;
  hasPet: boolean;
  sum: (a: number, b: number) => number;
}) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Has Pet: {props.hasPet.toString()}</p>
      <p>Sum: {props.sum(15, 3)}</p>
    </div>
  );
}

export default Prop;

// age function chizio return nakone =>void
