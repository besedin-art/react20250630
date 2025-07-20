import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

export const useUser = () => useContext(UserContext);