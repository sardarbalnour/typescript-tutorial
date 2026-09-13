type motherType = "bahar" | "maryam" | "fatemeh";

type PropData = {
  name: string;
  age: number;
  hasPet: boolean;
  father?: string;
  mother: motherType;
  sum: (a: number, b: number) => number;
};

function Prop({ name, age, hasPet, father, mother, sum }: PropData) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Has Pet: {hasPet.toString()}</p>
      <p>Father: {father || "-"}</p>
      <p>Mother: {mother}</p>
      <p>Sum: {sum(15, 3)}</p>
    </div>
  );
}

export default Prop;

// age function chizio return nakone =>void

// type any ro ta jayi ke momkene estefade nakon !
