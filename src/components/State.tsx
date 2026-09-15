import { useState } from "react";

type StateType = {
  name: string;
  age: number;
};

function State() {
  const [state, setState] = useState<StateType | null>(null);
  // null baraye vaqtie ke hanoz api call nashode va chizi nadarim 
  // alamat haye soal ham toye optional chaining estefade shode ke age state null bood 
  // error nadahad va faghat undefined return konad

  return (
    <div>
      <hr />
      <p>Name: {state?.name}</p>
      <p>Age: {state?.age}</p>
      <button type="button" onClick={() => setState({ name: "John", age: 30 })}>
        Set state
      </button>
    </div>
  );
}

export default State;
