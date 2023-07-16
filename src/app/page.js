import { Header } from "@/app/components/Header";
import {Sobre} from "@/app/components/Sobre";
import StateContext from "../../utils/StateContext";
import {useContext} from "react";
import MainContainer from "@/app/components/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Sobre />
    </MainContainer>
  );
}
