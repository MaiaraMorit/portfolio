"use client"

import Image from 'next/image';
import StateContext from "../../../utils/StateContext";
import {useContext} from "react";

export const Sobre = () => {
  const { sharedState, updateSharedState } = useContext(StateContext);
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

      {/*<div className="-mt-20 pt-4 flex justify-center">*/}
      {/*  <Image*/}
      {/*    src="/Maiara Morit.png"*/}
      {/*    alt=""*/}
      {/*    width={250}*/}
      {/*    height={170}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<div className="w-screen px-60">*/}
      {/*  <div className="mt-[-20px]">*/}
      {/*    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl flex justify-center m-4 mt-0 relative top-[-10px]">*/}
      {/*          <span style={{backgroundImage: 'linear-gradient(to right, #5DE0E6, #092E60)',*/}
      {/*            WebkitBackgroundClip: 'text',*/}
      {/*            WebkitTextFillColor: 'transparent',*/}
      {/*            textShadow: '0 0 2px rgba(0, 0, 0, 0.2)'}}>*/}
      {/*          Maiara Morit*/}
      {/*          </span>*/}
      {/*    </h1>*/}
      {/*  </div>*/}
      {/*  <div className="text-justify" style={{paddingLeft:250, width:1000 }}>*/}
      {/*    <p>*/}
      {/*      Olá, sou Maiara e tenho 28 anos. Formada em jornalismo desde 2020, tive a oportunidade de estagiar e trabalhar na área através de um canal chamado Rede Internacional de Televisão (RIT), Após meu estágio, decidi explorar o campo do marketing digital e planejamento de mídias. Trabalhei em uma loja chamada Dupla do Cabelo, onde assumi a responsabilidade de criar o setor de marketing e e-commerce do zero. Durante esse período, fui capaz de utilizar minhas habilidades de comunicação para transformar o produto em entretenimento, o que resultou em um crescimento significativo nas mídias sociais da empresa. Além disso, tive a oportunidade de liderar uma equipe que se expandiu ao longo do tempo.*/}
      {/*      Atualmente, estou em transição para a área de Desenvolvimento Web junto a Trybe, pois reconheço o seu potencial para combinar minha paixão pela tecnologia com minha habilidade de comunicação. Estou empenhada em adquirir as habilidades técnicas necessárias para me tornar uma desenvolvedora web competente e estou dedicando meu tempo ao aprendizado de linguagens de programação, frameworks e ferramentas relevantes.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}

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