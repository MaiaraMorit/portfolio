import { Header } from "@/app/components/Header";
import {Sobre} from "@/app/components/Sobre";
import MainContainer from "@/app/components/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Sobre />
    </MainContainer>
  );
}
