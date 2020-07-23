import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import TextField from "@material-ui/core/TextField";
export const TodoInput = () => {
  const { dispatch } = useContext(GlobalContext);
  const [text, setText] = useState("");

  const handleChange = (event: any) => {
    const value: string = event.target.value;
    console.log(value);
    setText(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text || text === " ") {
      alert("enter some thing");
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          text: text,
        },
      });
      setText("");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextField
          variant="outlined"
          label="Enter Todo Item "
          value={text}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
};
