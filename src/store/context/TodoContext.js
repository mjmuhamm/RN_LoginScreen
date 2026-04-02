import React, { createContext, useState } from 'react';


export const TodoContext = createContext({
  info: [],
  setInfo: (_data) => {},
  getInfo: async (_data) => {},
});

const TodoContextProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  const getInfo = async (data) => {
    setInfo(data);
  };

  return (
    <TodoContext.Provider value={{ info, setInfo, getInfo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;