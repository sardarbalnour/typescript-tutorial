type User1 = {
  name: string;
  age: number;
  email: string;
  address: string;
  phone: number;
};

type User2 = Omit<User1, "age" | "address">;

const person: User2 = { email: "", name: "", phone: 0 };

function User5() {
  return (
    <div>
      <p>Email: {person.email}</p>
    </div>
  );
}

export default User5;

// Omit is a utility type in TypeScript that allows you to create a new type
// by excluding specific properties from an existing type.
// In this case, User2 is created by omitting the age and address properties from the User1 type.
// The resulting User2 type only includes the name, email, and phone properties.
