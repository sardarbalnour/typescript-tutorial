const sum = (a: number, b: number): number => {
  return a + b;
};

function Function() {
  return (
    <div>
      <h2>{sum(5, 3)}</h2>
    </div>
  );
}

export default Function;
