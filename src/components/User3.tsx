type Tuser1 = {
  name: string;
  age: number;
};

type Tuser2 = Tuser1 & {
  email: string[];
};

const user1: Tuser1 = {
  name: "John",
  age: 30,
};

const user2: Tuser2 = {
  name: "Jane",
  age: 25,
  email: ["jane@example.com"],
};

interface IUser4 {
  name: string;
  age: number;
  email: string[];
}

interface IUser5 extends IUser4 {
  address: string;
}

const user4: IUser5 = {
  name: "Bob",
  age: 35,
  email: ["bob@example.com"],
  address: "123 Main St",
};

function User3() {
  return (
    <div>
      <p>Name: {user1.name}</p>
      <p>Age: {user1.age}</p>
      <p>Email: {user2.email.join(", ")}</p>
      <p>Address: {user4.address}</p>
    </div>
  );
}

export default User3;
