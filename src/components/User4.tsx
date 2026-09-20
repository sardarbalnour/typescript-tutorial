function User4() {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    console.log("clicked");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button onClick={clickHandler}>click</button>

      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default User4;

// React.MouseEvent<HTMLButtonElement, MouseEvent> is a type that represents
// the event object for a mouse click event on a button element in React.
// It provides information about the mouse event, such as the target element,
// mouse coordinates, and other properties related to the event.
