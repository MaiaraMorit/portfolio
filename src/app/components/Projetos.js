"use client"

import React, { useContext, useRef } from "react";
import StateContext from "../../../utils/StateContext";

export const Projetos = () => {
    const { sharedState } = useContext(StateContext);
    const darkMode = sharedState.theme === 'dark';
    
    const projetosRef = useRef(null); // Crie a ref aqui

    return (
        <div id="projetos" ref={ projetosRef } className={`flex flex-col pt-10 pb-20 justify-center items-center ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>
            <p className="text-sm">meus projetos</p>
            <p className="text-xl justify-center font-bold">EM BREVE</p>
        </div>
    );
};
