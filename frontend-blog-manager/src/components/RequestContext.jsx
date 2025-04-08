import { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [request, setRequest] = useState(
    {
    UserId: localStorage.getItem('StoreUserId'),
    Title: "",
    Description: "",
    Favourite: true,
    Personal: true,
  }
);

  return (
    <RequestContext.Provider value={{ request, setRequest }}>
      {children}
    </RequestContext.Provider>
  );
};