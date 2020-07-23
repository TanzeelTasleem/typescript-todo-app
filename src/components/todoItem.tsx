import React, { useContext } from "react";
import { Todo } from "../Types/type";
import { GlobalContext } from "../context/globalContext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const TodoItem = () => {
  const {
    state: { todo },
    dispatch,
  } = useContext(GlobalContext);
  const handleClick = (item: any) => {
    console.log(item.text);
    dispatch({
      type: "DELETE_TODO",
      payload: {
        text: item.text,
      },
    });
  };
  return (
    <div>
      <List dense={true}>
        {todo.map((item: Todo, index: number) => {
          return (
            <ListItem>
              <ListItemText primary={item.text} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => handleClick(item)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
