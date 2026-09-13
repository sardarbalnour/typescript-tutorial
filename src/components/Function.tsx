import Prop from "./Prop";

const sum = (a: number, b: number): number => {
  return a + b;
};

function Function() {
  return (
    <div>
      <h2>{sum(5, 3)}</h2>
      <Prop name="sardar" age={26} hasPet={true} sum={sum} mother="bahar" />
      <hr />
      <Prop
        name="sardar"
        age={26}
        hasPet={true}
        sum={sum}
        father="John"
        mother="maryam"
      />
    </div>
  );
}

export default Function;
