import { Header } from "@/app/components/Header";
import { Sobre } from "@/app/components/Sobre";
import { Projetos } from "@/app/components/Projetos";
import MainContainer from "@/app/components/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Sobre />
      <Projetos />
    </MainContainer>
  );
}
