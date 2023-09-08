"use client";

import {
  FC,
  PropsWithChildren,
  useReducer,
  useContext,
  createContext,
  Dispatch,
} from "react";
import {
  ThemeReducer,
  ThemeActions,
  ThemeState,
  lightColor,
  darkColor,
} from "./reducer";
import { Mode } from "../../types/types";
import useMediaQuery from "@mui/material/useMediaQuery";

type InitialStateType = {
  theme: ThemeState;
};

const initialState = {
  theme: {
    mode: "light" as Mode,
    backgroundColor: lightColor,
    textColor: darkColor,
  },
};

const reducer = ({ theme }: InitialStateType, action: ThemeActions) => ({
  theme: ThemeReducer(theme, action),
});

export const ThemeContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ThemeActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const initialThemeMode: Mode = isDarkModeEnabled ? "dark" : "light";

  const [state, dispatch] = useReducer(reducer, {
    theme: {
      mode: initialThemeMode,
      backgroundColor: isDarkModeEnabled ? darkColor : lightColor,
      textColor: isDarkModeEnabled ? lightColor : darkColor,
    },
  });
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
