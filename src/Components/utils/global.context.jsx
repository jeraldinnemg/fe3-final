import { createContext, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

export const initialState = {
  theme: "light",
  data: [],
  favoritos: [],
  flag: true,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: action.payload };
    case "DATA":
      return { ...state, data: action.payload };
    case "FAV":
      return { ...state, favoritos: action.payload };
    case "FLAG":
      return { ...state, flag: action.payload };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const store = {
    state,
    dispatch,
  };

  return (
    <ContextGlobal.Provider value={store}>
      <div className={`app-theme ${state.theme}`}>{children}</div>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

