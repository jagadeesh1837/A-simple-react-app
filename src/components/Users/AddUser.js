import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userInput, setUserInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    console.log(userInput, ageInput);
    setUserInput("");
    setAgeInput("");
  };

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null); //becuase error will stor null and it means no error
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
            value={userInput}
            onChange={userInputHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={ageInput} //This is used to show the enter value in the input field and help us to change the state of the input field like empty the input field after submiting the form
            onChange={ageInputHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

//here we used ref to read the value from the input and we can delete the state but i kept ther to undertsnad the state and refs.But useing ref wee loose the empty input field means the values vwill be there in the input even on adding.To manege we set that refs current value to empty string but this is not acceptable as we are managing the dom which  is not a good practice this type of components are called uncontrolled components and useState components are called controled components

//controlledd components:internal state is controlled by react

//unControlled components:internal state is ot controlled by react
