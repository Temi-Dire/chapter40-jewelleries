import React, { createContext, useReducer, useContext } from "react";

//Prepare the data layer
export const StateContext = createContext();

//We need to provide the data layer to every component of our app

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//What we use to pull data from the data layer to any component

export const useStateValue = () => useContext(StateContext);
