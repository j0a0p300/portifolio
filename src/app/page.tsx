import { ModeToggle } from "@/components/button-theme";
import { Header } from "./components/header";
import { CardOption } from "./components/card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <div className="flex justify-center items-center h-64">
          <div id="typewriter">
            <h1>Olá, meu nome é João Pedro!</h1>
          </div>
        </div>
      </main>
      <div>
        <div className="flex">
          <CardOption/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
