type StateType = {
  name: string;
  age: number;
};

type UserProps = {
  value: StateType | null;
  setState: React.Dispatch<React.SetStateAction<StateType | null>>;
};

function User({ value, setState }: UserProps) {
  return (
    <div>
      <p>Name: {value?.name}</p>
      <p>Age: {value?.age}</p>
      <button type="button" onClick={() => setState({ name: "Jane", age: 25 })}>
        Set state
      </button>
    </div>
  );
}

export default User;
