import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [myForm, setMyForm] = useState({ name: "", age: null });

  function handleUpdateForm(e) {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>My State Component</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(myForm);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleUpdateForm}
        />

        <input type="number" name="age" onChange={handleUpdateForm} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
