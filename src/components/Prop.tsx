type PropData = {
  name: string;
  age: number;
  hasPet: boolean;
  sum: (a: number, b: number) => number;
};

function Prop({ name, age, hasPet, sum }: PropData) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Has Pet: {hasPet.toString()}</p>
      <p>Sum: {sum(15, 3)}</p>
    </div>
  );
}

export default Prop;

// age function chizio return nakone =>void
