import StateContext from "../../../utils/StateContext";
import {useContext, useEffect} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {getCookie, setCookie} from "../../../utils/cookies";

export default function ThemeIcon() {
  const { sharedState, updateSharedState } = useContext(StateContext);

  const toggleTheme = () => {
    setCookie('theme', sharedState.theme === 'dark' ? 'light' : 'dark')
    updateSharedState({
      theme: sharedState.theme === 'dark' ? 'light' : 'dark'
    })
  };

  useEffect(() => {
    const themeAdapter = async () => {
      const theme = await getCookie('theme')
      if (theme) {
        if (theme.value !== 'dark') {
          updateSharedState({
            theme: 'light'
          })
        }
      }
    }
    themeAdapter()
  }, [])

  return (
    sharedState.theme === 'dark' ? <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" onClick={toggleTheme} /> : <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" onClick={toggleTheme} />
  )
}