type PropData = {
  name: string;
  age: number;
  hasPet: boolean;
  father?: string;
  sum: (a: number, b: number) => number;
};

function Prop({ name, age, hasPet, father, sum }: PropData) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Has Pet: {hasPet.toString()}</p>
      <p>Father: {father || "-"}</p>
      <p>Sum: {sum(15, 3)}</p>
    </div>
  );
}

export default Prop;

// age function chizio return nakone =>void

// type any ro ta jayi ke momkene estefade nakon !
