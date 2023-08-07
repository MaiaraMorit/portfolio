"use client"

import React from "react";
import Image from 'next/image';
import StateContext from "../../../utils/StateContext";
import { useContext } from "react";
import { GrReactjs } from'react-icons/gr';
import { SiRedux, SiTestinglibrary, SiJavascript } from 'react-icons/si';

export const Sobre = () => {
  const { sharedState } = useContext(StateContext);
  const darkMode = sharedState.theme === 'dark';

  const arrayBtns = ["GitHub", "LinkeIn", "Instagram", "Currículo"];

  const handleClick = (btn) => {
    if (btn === "GitHub") {
      window.open('https://github.com/maiaramorit', '_blank');
    } else if (btn === "LinkeIn") {
      window.open('https://linkedin.com/in/maiaramorit/', '_blank');
    } else if (btn === "Instagram") {
      window.open('https://www.instagram.com/maiaramorit/', '_blank');
    } else if (btn === "Currículo") {
      window.open('https://drive.google.com/file/d/1nhw7P9WpcLKCTNxUWndM1pzoeb4Am0KM/view?usp=sharing', '_blank');
    }
  };

  return (
    <div>
      <div className="pr-2 pt-2 flex justify-end">
        <button
          type="button"
          className={`inline-flex items-center p-1 rounded-md justify-center focus:outline-none ${
            darkMode ? "hover:bg-gray-600" : "hover:bg-gray-400"
          }`}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <div className="relative w-5 h-5 sm:w-7 sm:h-7 mr-1">
            <Image
              src="/bandeira-USA.jpg"
              alt="English"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={`text-sm sm:text-base ${
            darkMode ? "dark:text-gray-400" : "text-gray-700"
          }`}>
            EN
          </p>
        </button>
      </div>

      <div className="-mt-20 pt-10 flex justify-center">
      <Image
        src="/MaiaraMorit.png"
        alt="Maiara Morit"
        width={250}
        height={170}
     />
     </div>

      <div className="flex flex-col items-center">
        <p className="pt-8 text-gray-500">Olá, me chamo</p>
               <h1 className="text-3xl sm:text-4xl font-bold text-customCyan " 
                >
                Maiara Morit
               </h1>
      <div className= {`text-sm text-justify items-center pl-20 pr-20 p-2 pl-20 sm:text-base sm:pl-82 sm:pr-82 md:pl-40 md:pr-40 lg:pl-60 lg:pr-60 xl:pl-60 xl:pr-60 ${
            darkMode ? "dark:text-gray-400" : "text-gray-700"
          }`}>
          <p>
          Sou uma desenvolvedora de software júnior apaixonada por tecnologia e suas inovações. Tenho experiência comprovada em marketing digital, onde obtive sucesso ao impulsionar o número de seguidores da loja Dupla do Cabelo de 8 mil para 190 mil seguidores no instagram. Agora, busco aplicar essa experiência no desenvolvimento fullstack, utilizando minhas habilidades de transformar produtos em entretenimento tendo a perspectiva do cliente. Acredito que a comunicação e a diversidade são fatores-chave para impulsionar a inovação e encontrar soluções criativas para problemas.
        </p>
       </div>
     </div>

     <div className="flex justify-center">
          {
            arrayBtns.map((btn, index) => (
              <button
                key={`info-btn-${index}`}
                type="button"
                className={`cursor-pointer inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white ${
                  darkMode ? "dark:text-white" : "text-gray-500"
                }`}
                onClick={() => handleClick(btn)}
                >{btn}</button>
            ))
          }
    </div>

    <div className={`min-w-screen flex flex-col items-center pt-10 flex flex-row ${darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>
      <p className="text-customCyan font-bold text-3xl">Skills</p>
      <p>minhas habilidades</p>
      <div className="flex flex-row gap-x-20 pt-5" >
          <div className="flex flex-col p-5 bg-cyan-800/30 text-cyan-400 hover:bg-transparent border border-solid border-2 border-cyan-800/20 hover:border-cyan-800 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white rounded">Front-End
         
          <div className="flex flex-row flex-wrap text-white">
            <div className="flex flex-row p-2 w-1/2"><GrReactjs className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">React.js</p> <p className="text-gray-400 pl-1">Intermediário</p></div>
            </div>

            <div className="flex flex-row p-2 w-1/2"><SiJavascript className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">Javascript</p> <p className="text-gray-400 pl-1">Avançado</p></div>
            </div>

            <div className="flex flex-row p-2 w-1/2"><SiRedux className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">Redux</p> <p className="text-gray-400 pl-1">Avançado</p></div>
            </div>
            <div className="flex flex-row p-2 w-1/2"><SiTestinglibrary className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">React Testing Library</p> <p className="text-gray-400 pl-1">Avançado</p></div>
            </div>
          </div>
          

          </div>
          <div className="flex flex-col p-5 bg-cyan-800/30 text-cyan-400 hover:bg-transparent border border-solid border-2 border-cyan-800/20 hover:border-cyan-800 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white rounded">Back-End
         
          <div className="flex flex-row flex-wrap text-white">
            <div className="flex flex-row p-2 w-1/2"><GrReactjs className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">React.js</p> <p className="text-gray-400 pl-1">Intermediário</p></div>
            </div>

            <div className="flex flex-row p-2 w-1/2"><SiJavascript className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">Javascript</p> <p className="text-gray-400 pl-1">Avançado</p></div>
            </div>

            <div className="flex flex-row p-2 w-1/2"><SiRedux className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">Redux</p> <p className="text-gray-400 pl-1">Avançado</p></div>
            </div>
            <div className="flex flex-row p-2 w-1/2"><SiTestinglibrary className="text-customCyan w-10 h-10"/>
            <div className=" text-xs"><p className="text-white pl-1">React Testing Library</p> <p className="text-gray-400 pl-1">Avançado</p></div>
            </div>
          </div>

          </div>
      </div>        
    </div>
    </div>
  )
}