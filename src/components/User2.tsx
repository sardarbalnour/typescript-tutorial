type PropData = {
  name: string;
  age: number;
  hasPet: boolean;
  sum: (a: number, b: number) => number;
};

const User2: React.FC<PropData> = ({ name, age, hasPet, sum }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Has Pet: {hasPet.toString()}</p>
      <p>Sum: {sum(15, 3)}</p>
    </div>
  );
};

export default User2;
