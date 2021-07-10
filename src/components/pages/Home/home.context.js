import React from 'react';

const HomeStateContext = React.createContext(undefined);
const HomeDispatchContext = React.createContext(undefined);

const homeReducer = (state, action) => {
    switch (action.type) {
        case 'setUser': {
            return { ...state, user: action.value };
        }

        default:
            throw new Error(`Action ${action.type} not found.`);

        
    }
}


export const HomeProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(homeReducer, {
      user: undefined,
    });
  
    return (
      <HomeStateContext.Provider value={state}>
        <HomeDispatchContext.Provider value={dispatch}>{children}</HomeDispatchContext.Provider>
      </HomeStateContext.Provider>
    );
  };
  

export const useHomeState = () => {
    const context = React.useContext(HomeStateContext);
  
    if (context === undefined) {
      throw new Error('useTaskState must be used within a TaskProvider');
    }
  
    return context;
  };
  
export const useHomeDispatch = () => {
    const context = React.useContext(HomeDispatchContext);
  
    if (context === undefined) {
      throw new Error('useTaskDispatch must be used within a TaskProvider');
    }
  
    return context;
  };
  
  export const useHome = () => {
    return [useHomeState(), useHomeDispatch()];
  };