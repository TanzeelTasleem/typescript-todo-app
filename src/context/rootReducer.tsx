import { TodoState, TodoActions } from "../Types/type";

export const RootReducer = (
  state: TodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todo: [
          ...state.todo.filter((item) => item.text !== action.payload.text),
        ],
      };
    default:
      return {
        ...state,
      };
  }
};
