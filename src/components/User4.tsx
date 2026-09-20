function User4() {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    console.log("clicked");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);};

  return (
    <div>
      <button onClick={clickHandler}>click</button>

      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default User4;
