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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                Next.js e React.js
              </TabsTrigger>
            </TabsList>
            <TabsContent value="next" className="w-full">
              <Card className="w-fit">
                <CardHeader>
                  <div className="flex">
                    <div className="flex items-center">
                      <RiNextjsFill size={55} className="mr-2" />
                      <CardTitle className="text-2xl">Next.js</CardTitle>
                    </div>
                    <div className="flex items-center ml-4">
                      <RiReactjsFill size={55} className="mr-2" />
                      <CardTitle className="text-2xl">React.js</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-justify mb-6">
                    Next.js é um framework para React que facilita a construção
                    de aplicações web. Ele oferece funcionalidades como
                    renderização do lado do servidor (SSR), geração de sites
                    estáticos (SSG), roteamento automático e otimização de
                    desempenho. Utilizo esse framework no meu dia a dia, para criação e manutenção dos projetos abaixo:

                    <br />
                    <br />
                    Projetos em Next JS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-40 w-full rounded-md">
                    <Link href="/">
                      <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                        <FaGithub size={30} className="mr-2" />{" "}
                        <span>Meu Portifólio</span>
                      </li>
                    </Link>
                    <Link href="https://polite-forest-0adeab40f.6.azurestaticapps.net" target="_blank">
                      <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                        <FaGithub size={30} className="mr-2" />{" "}
                        <span>Sistema de Sorteio</span>
                      </li>
                    </Link>
                    <Link href="https://github.com/j0a0p300/task-control" target="_blank">
                      <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                        <FaGithub size={30} className="mr-2" />{" "}
                        <span>Controle de Tarefas</span>
                      </li>
                    </Link>
                    <Link href="https://github.com/j0a0p300/site-institucional" target="_blank">
                      <li className="flex items-center pl-2 py-4 rounded hover:bg-gray-400 hover:cursor-pointer hover:transition transition">
                        <FaGithub size={30} className="mr-2" />{" "}
                        <span>Site Institucional com Prismic IO</span>
                      </li>
                    </Link>
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
                  <CardContent className="text-justify mb-6">
                    <ScrollArea className="h-64 w-full rounded-md text-sm">
                      Desenvolvedor Pleno com experiência sólida em React, Next.js, TypeScript e PHP,
                      atuando em aplicações web modernas com foco em performance e usabilidade.
                      Proficiente em HTML5, CSS3 e Tailwind CSS, com domínio de versionamento via Git e
                      práticas de desenvolvimento ágil. Experiência tanto em front-end quanto em back-end, entregando soluções completas e escaláveis.

                      <br />
                      <br />
                      Sou um entusiasta da tecnologia e um apaixonado
                      por música. Acredito que a inovação e a criatividade
                      andam de mãos dadas, e busco constantemente integrar
                      essas duas paixões em minha vida profissional. Com
                      experiência em Next.js, React.js e TypeScript, estou sempre buscando estar
                      atualizado sobre as novas tecnologias e
                      busco aplicar esse conhecimento de forma criativa. Além
                      disso, a música é uma fonte constante de inspiração, que me ajuda
                      a pensar fora da caixa e a abordar desafios de maneira original.

                      <br />
                      <br />
                      <Link href="http://github.com/j0a0p300" target="_blank">
                        <Button>Github</Button>
                      </Link>
                      <Button className="mx-2">Currículo</Button>
                      <Link href="https://www.linkedin.com/in/joaopedrofariascosta" target="_blank">
                        <Button>Linkedin</Button>
                      </Link>
                    </ScrollArea>
                  </CardContent>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
