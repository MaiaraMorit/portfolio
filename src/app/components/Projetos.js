"use client"

import React from "react";
import StateContext from "../../../utils/StateContext";
import { useContext } from "react";

export const Projetos = () => {
    const { sharedState } = useContext(StateContext);
    const darkMode = sharedState.theme === 'dark';
return (
    <div className={`flex justify-center text-justify font-bold pt-28 ${ darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>
        <p>EM BREVE</p>
    </div>
);
};