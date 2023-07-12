"use client";

import {Header} from "@/app/components/Header";
import {useState} from "react";
export default function Home() {
  const [inputText, setInputText] = useState('')

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
  }

  return (
    <main>
        <Header />
      {/* <input type={'text'} value={inputText} onChange={e => handleInputChange(e)}/> */}
    </main>
  )
}
