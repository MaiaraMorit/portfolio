"use client"

import Image from 'next/image';
import StateContext from "../../../utils/StateContext";
import {useContext} from "react";

export const Sobre = () => {
  const { sharedState } = useContext(StateContext);
  const darkMode = sharedState.theme === 'dark';
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

      <div className="-mt-20 pt-4 flex justify-center">
      <Image
        src="/MaiaraMorit.png"
        alt="Maiara Morit"
        width={250}
        height={170}
     />
     </div>

      <div className="w-screen flex flex-col items-center">
               <span className="text-3xl sm:text-4xl font-bold pt-8" style={{backgroundImage: 'linear-gradient(to right, #5DE0E6, #2F628F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 2px rgba(0, 0, 0, 0.2)'}}>
                Maiara Morit
               </span>
      <div className= {`text-sm text-justify pl-10 pr-10 p-2 sm:text-base sm:pl-96 sm:pr-96 md:pl-20 md:pr-20 items-center border-solid border-4 border-indigo-500 ${
            darkMode ? "dark:text-gray-400" : "text-gray-700"
          }`}>
          <p>
          Sou uma desenvolvedora de software júnior apaixonada por tecnologia e suas inovações. Tenho experiência comprovada em marketing digital, onde obtive sucesso ao impulsionar o número de seguidores da loja Dupla do Cabelo de 8 mil para 190 mil seguidores no instagram. Agora, busco aplicar essa experiência no desenvolvimento fullstack, utilizando minhas habilidades de transformar produtos em entretenimento tendo a perspectiva do cliente. Acredito que a comunicação e a diversidade são fatores-chave para impulsionar a inovação e encontrar soluções criativas para problemas.
        </p>
       </div>
     </div>

      {/*<div className="flex justify-center m-4 mt-0 relative top-[-10px]" style={{paddingTop:50,}}>*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*/}
      {/*    aria-controls="mobile-menu"*/}
      {/*    aria-expanded="false"*/}
      {/*    onClick={() => window.open('https://github.com/maiaramorit', '_blank')}*/}
      {/*  >*/}
      {/*    GitHub*/}
      {/*  </button>*/}

      {/*  <button*/}
      {/*    type="button"*/}
      {/*    className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*/}
      {/*    aria-controls="mobile-menu"*/}
      {/*    aria-expanded="false"*/}
      {/*    onClick={() => window.open('https://linkedin.com/in/maiaramorit/', '_blank')}*/}
      {/*  >*/}
      {/*    LinkeIn*/}
      {/*  </button>*/}


      {/*  <button*/}
      {/*    type="button"*/}
      {/*    className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*/}
      {/*    aria-controls="mobile-menu"*/}
      {/*    aria-expanded="false"*/}
      {/*    onClick={() => window.open('https://www.instagram.com/maiaramorit/', '_blank')}*/}
      {/*  >*/}
      {/*    Instagram*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  )
}