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

// tuple => array ke size va type har element ro moshakhas mikone
// baraye mesal : type myTuple = [string, number, boolean];
// ke faghat 3 ta element dare(na kamtar na bishtar) va type har element ro moshakhas mikone

// literal type => type ke faghat yek value ro migire va hich value digei ro nemigire
// baraye mesal : type myLiteral = "hello" | "world";
// faghat mitone "hello" ya "world" ro begire va hich value digei ro nemigire
// literal vs union type => union type mitone chand value ro begire vali literal type faghat yek value ro migire

// Type narrowing is a concept in TypeScript that refers to the process
// of refining the type of a variable within a specific scope based
// on certain conditions or checks.
// It allows developers to provide more specific type information to the TypeScript compiler,
// enabling better type safety and reducing potential runtime errors.