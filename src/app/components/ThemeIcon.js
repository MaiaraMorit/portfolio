import StateContext from "../../../utils/StateContext";
import {useContext} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/solid";

export default function ThemeIcon() {
  const { sharedState, updateSharedState } = useContext(StateContext);

  const toggleTheme = () => {
    updateSharedState({
      theme: sharedState.theme === 'dark' ? 'light' : 'dark'
    })
  };

  return (
    sharedState.theme === 'dark' ? <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" onClick={toggleTheme} /> : <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" onClick={toggleTheme} />
  )
}