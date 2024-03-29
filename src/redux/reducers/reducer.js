import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../constants/ActionType";

// function to use local storage

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expense = [];
  if (list) {
    expense = JSON.parse(list);
  }
  return expense;
};

const initialState = {
  expenseList: initialList(),

  // a query to search for data (Implementing search functionality)
  query: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.data])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }

    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedList));

      return {
        ...state,
        expenseList: updatedList,
      };
    }

    case SEARCH_EXPENSE: {
      const { query } = action;
      return {
        ...state,
        query: query,
      };
    }

    default:
      return state;
  }
};
