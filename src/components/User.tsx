type StateType = {
  name: string;
  age: number;
};

interface UserProps {
  value: StateType | null;
  setState: React.Dispatch<React.SetStateAction<StateType | null>>;
}
// interface mamolan baraye type haye objecti estefade mishe
//  ke chizi ro return mikone va faghat yek object ro return mikone

// type UserProps = {
//   value: StateType | null;
//   setState: React.Dispatch<React.SetStateAction<StateType | null>>;
// };

// type va interface har do baraye type haye objecti estefade mishe va faghat syntaxeshon fargh dare

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
