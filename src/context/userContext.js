import React, { useReducer } from "react";

export const UserContext = React.createContext();

const initialState = {
  userList: [],
  isLoading: false
};

// Action types
const ADD_USER = "ADD_USER";

// Actions creator
export function addUser(user) {
  return {
    type: "ADD_USER",
    payload: {
      user
    }
  };
}

// Selectors
export const getUserById = (state, id) => {
  const { userList } = state;
  return userList.find(({ id: usId }) => `${usId}` === `${id}`);
}

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, payload.user]
      };
    default:
      return state;
  }
};

// Provider wrapper
export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}
