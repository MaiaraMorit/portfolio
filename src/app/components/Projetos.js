"use client"

import React from "react";
import StateContext from "../../../utils/StateContext";
import { useContext } from "react";

export const Projetos = () => {
    const { sharedState } = useContext(StateContext);
    const darkMode = sharedState.theme === 'dark';
return (
    <div id='projetos' className={`flex flex-col pt-10 justify-center items-center ${ darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>
        <p className="text-sm">meus projetos</p>
        <p className="text-xl justify-center font-bold">EM BREVE</p>
    </div>
);
};