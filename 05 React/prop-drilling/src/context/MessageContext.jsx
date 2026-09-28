import { createContext } from "react";
import App from "../App";

const MessageContext = createContext()

export default function MessageProvider({children}) {

  return (
    <MessageContext.Provider value={"Hiiii Everyone"}>
      {children}
    </MessageContext.Provider>
  )
}

export { MessageContext }