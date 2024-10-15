import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export function CardOption() {
  return (
    <>
      <div className="flex mt-40 justify-center">
        <div>
          <Tabs
            defaultValue="sobre"
            id="tabContent"
            className="flex absolute pl-80 pr-80"
          >
            <TabsList className="flex flex-col h-28 mr-4 min-w-72 mt-2">
              <TabsTrigger value="sobre" className="w-full h-14">
                Sobre
              </TabsTrigger>
              <TabsTrigger value="next" className="w-full h-14">
                Next JS
              </TabsTrigger>
              <TabsTrigger value="php" className="w-full h-14">
                PHP
              </TabsTrigger>
            </TabsList>
            <TabsContent value="next" className="w-full">
              <Card className="w-fit">
                <CardHeader>
                  <div className="flex items-center">
                    <RiNextjsFill size={55} className="mr-2" />
                    <CardTitle className="text-2xl">Next JS</CardTitle>
                  </div>
                  <CardDescription className="text-justify mb-6">
                    Next.js é um framework para React que facilita a construção
                    de aplicações web. Ele oferece funcionalidades como
                    renderização do lado do servidor (SSR), geração de sites
                    estáticos (SSG), roteamento automático e otimização de
                    desempenho.
                    <br />
                    <br />
                    Projetos em Next JS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-40 w-full rounded-md">
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Site de Portifólio</span>
                    </li>
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Controle de Tarefas</span>
                    </li>
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Site Institucional com Prismic IO</span>
                    </li>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="php" className="w-full">
              <Card className="w-fit">
                <CardHeader>
                  <div className="flex items-center">
                    <SiPhp size={55} className="mr-2" />
                    <CardTitle className="text-2xl">PHP</CardTitle>
                  </div>
                  <CardDescription className="text-justify mb-6">
                    PHP (Hypertext Preprocessor) é uma linguagem de programação
                    de código aberto, especialmente projetada para o
                    desenvolvimento web. Inicialmente criada por Rasmus Lerdorf
                    em 1994, o PHP permite a criação de páginas dinâmicas e
                    interativas. Aqui estão algumas características e
                    funcionalidades do PHP
                    <br />
                    <br />
                    Projetos em PHP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-40 w-full rounded-md">
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Site de Portifólio</span>
                    </li>
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Controle de Tarefas</span>
                    </li>
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Site Institucional com Prismic IO</span>
                    </li>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sobre" className="w-full">
              <Card className="w-fit">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CardTitle className="text-6xl">Sobre mim</CardTitle>
                  </div>
                  <CardDescription className="text-justify mb-6">
                    Sou um entusiasta da tecnologia e um apaixonado 
                    por música. Acredito que a inovação e a criatividade 
                    andam de mãos dadas, e busco constantemente integrar 
                    essas duas paixões em minha vida profissional. Com 
                    experiência em [sua área de atuação], estou sempre 
                    atualizado sobre as últimas tendências tecnológicas e 
                    busco aplicar esse conhecimento de forma criativa. Além 
                    disso, a música é uma fonte constante de inspiração, que me ajuda 
                    a pensar fora da caixa e a abordar desafios de maneira original. Estou 
                    sempre em busca de novos aprendizados e colaborações que possam unir essas minhas paixões.
                    <br />
                    <br />
                    Projetos em PHP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-40 w-full rounded-md">
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Site de Portifólio</span>
                    </li>
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Controle de Tarefas</span>
                    </li>
                    <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                      <FaGithub size={30} className="mr-2" />{" "}
                      <span>Site Institucional com Prismic IO</span>
                    </li>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
