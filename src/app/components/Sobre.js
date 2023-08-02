"use client"

import React from "react";
import Image from 'next/image';
import StateContext from "../../../utils/StateContext";
import { useContext } from "react";

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

  const hardSkills = [
    <Image src="/docker.png" alt="docker" layout="fill" objectFit="contain"/>,
    <Image src="/React.png" alt="React" layout="fill" objectFit="contain"/>,
    <Image src="/javascript.png" alt="JS" layout="fill" objectFit="contain"/>,
    <Image src="/nodejs-logo.png" alt="nodeJs" layout="fill" objectFit="contain"/>,
    <Image src="/insomnia.png" alt="insomnia" layout="fill" objectFit="contain"/>,
    <Image src="/redux.png" alt="redux" layout="fill" objectFit="contain"/>,
    <Image src="/java.png" alt="java" layout="fill" objectFit="contain"/>,
    <Image src="/mysql.png" alt="mysql" layout="fill" objectFit="contain"/>,
    <Image src="/next.svg" alt="next" layout="fill" objectFit="contain"/>,
    <Image src="/vercel.svg" alt="vercel" layout="fill" objectFit="contain"/>,
  ];


  return (
    <div style={{ overflowY: 'auto', maxHeight: '90vh' }}>
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

      <div className="min-w-screen flex flex-col items-center">
               <span className="text-3xl sm:text-4xl font-bold pt-8" 
                style={{backgroundImage: 'linear-gradient(to right, #5DE0E6, #2F628F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 2px rgba(0, 0, 0, 0.2)'}}
                >
                Maiara Morit
               </span>
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

    <div className=
    {`min-w-screen flex flex-col items-center pt-10 ${ darkMode ? "dark:text-gray-400" : "text-gray-500"}`}>
      Hard skills 
          <div className='min-w-screen pt-2 flex flex-row space-x-3'>
           {
             hardSkills.map((skill, index) => (
                 <div key={`skill-${index}`} className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-22 md:h-22 xl:w-42 xl:h-42">
                {skill}
              </div>
            ))
          }
        </div>    
    </div>
    </div>
  )
}

// criar uma parte que leva para os meus projetos pessoais, com imagens e link do github daquela projeto e um link dele deployado, nesta pagina um vídeo do youtube onde eu me apresento e falo sobre mim. na parte de formação do botão eu quero abrir um pop-up com essas infos e imagem minha na facul e curso trybe e na parte de experiências quero imagens da duppla do cabelo também utilizando o carrossel. um poup-up