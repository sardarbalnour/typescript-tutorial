function Prop(props: { name: string; age: number; hasPet: boolean }) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Has Pet: {props.hasPet.toString()}</p>
    </div>
  );
}

export default Prop;
