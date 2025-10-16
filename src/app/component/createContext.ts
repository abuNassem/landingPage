import { createContext } from "react";
import { Context } from "../custom/context";

export const AppContext=createContext<Context|null>(null)
