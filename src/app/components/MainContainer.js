"use client"

import StateContext from "../../../utils/StateContext";
import {useContext} from "react";

export default function MainContainer({ children }) {
  const { sharedState, updateSharedState } = useContext(StateContext);
  const darkMode = sharedState.theme === 'dark';

  return (
    <main className={darkMode ? "dark bg-gray-800" : ""}>
      {children}
    </main>
  )
}