
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BruteForce = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Ataques de Força Bruta</h1>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">O que são ataques de força bruta?</h2>
          <p className="mb-4 text-gray-700">
            Um ataque de força bruta é uma tentativa de descobrir uma senha ou chave tentando 
            sistematicamente todas as combinações possíveis até encontrar a correta. É como tentar todas as 
            possíveis combinações de um cadeado até que ele abra.
          </p>
          <p className="text-gray-700">
            Este método é um dos mais antigos e diretos para quebrar senhas, mas também 
            pode ser o mais demorado, especialmente para senhas longas e complexas.
          </p>
          
          <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-amber-800">Importante entender</h3>
            <p className="text-amber-700">
              Este site tem propósito puramente educacional. Realizar ataques de força bruta 
              contra sistemas sem autorização é ilegal e antiético.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="types" className="max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="types">Tipos de Ataques</TabsTrigger>
            <TabsTrigger value="methods">Métodos Utilizados</TabsTrigger>
            <TabsTrigger value="defense">Defesas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="types" className="p-6 bg-white rounded-b-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Principais tipos de ataques de força bruta</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Ataque de Força Bruta Puro</h4>
                <p className="text-gray-700">
                  Tenta todas as combinações possíveis de caracteres, começando com combinações mais simples 
                  e progredindo para mais complexas. É o método mais completo, mas também o mais lento.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Ataque de Dicionário</h4>
                <p className="text-gray-700">
                  Usa uma lista pré-compilada de palavras comuns, frases e senhas conhecidas. 
                  É mais rápido que força bruta pura, mas limitado ao conteúdo do dicionário.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Ataque Híbrido</h4>
                <p className="text-gray-700">
                  Combina ataques de dicionário com força bruta, adicionando caracteres extras ou fazendo 
                  substituições em palavras do dicionário (como trocar "a" por "@").
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Ataque de Rainbow Table</h4>
                <p className="text-gray-700">
                  Usa tabelas pré-computadas de hashes de senhas para encontrar correspondências rapidamente. 
                  Eficaz contra hashes não-salgados.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="methods" className="p-6 bg-white rounded-b-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Como os atacantes realizam estes ataques</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Ferramentas automatizadas</h4>
                <p className="text-gray-700">
                  Existem diversos softwares especializados em tentar múltiplas combinações de senhas 
                  automaticamente contra serviços de login.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Processamento distribuído</h4>
                <p className="text-gray-700">
                  Atacantes podem usar múltiplos computadores ou serviços em nuvem para acelerar o processo 
                  de teste de combinações.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Hardware especializado</h4>
                <p className="text-gray-700">
                  GPUs e hardware dedicado (como ASICs) são utilizados para aumentar dramaticamente 
                  a velocidade de tentativas por segundo.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-lg text-gray-800">Exemplo prático</h4>
                <p className="text-gray-700 mb-2">
                  Para uma senha de 8 caracteres usando apenas letras minúsculas:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>26 possíveis caracteres por posição</li>
                  <li>26^8 = 208 bilhões de combinações possíveis</li>
                  <li>A 1 bilhão de tentativas por segundo: ~3.5 minutos para testar todas</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Adicionar maiúsculas, números e símbolos aumenta drasticamente este tempo.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="defense" className="p-6 bg-white rounded-b-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Como se proteger contra ataques de força bruta</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Use senhas longas e complexas</h4>
                <p className="text-gray-700">
                  Cada caractere adicional e cada tipo adicional de caractere (maiúsculas, minúsculas, 
                  números, símbolos) aumenta exponencialmente o tempo necessário para quebrar a senha.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Limite de tentativas</h4>
                <p className="text-gray-700">
                  Serviços bem protegidos implementam bloqueios temporários ou permanentes 
                  após um determinado número de tentativas falhas.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">CAPTCHA</h4>
                <p className="text-gray-700">
                  Desafios que verificam se o usuário é humano para impedir tentativas automatizadas.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Autenticação de dois fatores (2FA)</h4>
                <p className="text-gray-700">
                  Mesmo que um atacante descubra sua senha, ainda precisaria do segundo fator 
                  (como um código enviado ao seu telefone) para acessar sua conta.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Hashing e salting</h4>
                <p className="text-gray-700">
                  Serviços bem implementados armazenam senhas usando funções hash fortes e 
                  valores salt únicos, o que torna o processo de quebra muito mais lento.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Tempo estimado para quebrar senhas</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-4 pr-4">Complexidade da Senha</th>
                      <th className="pb-4 px-4">Exemplo</th>
                      <th className="pb-4 px-4">Tempo (PC comum)</th>
                      <th className="pb-4 pl-4">Tempo (Supercomputador)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 pr-4">6 caracteres, só minúsculas</td>
                      <td className="py-4 px-4 font-mono">abcdef</td>
                      <td className="py-4 px-4">Segundos</td>
                      <td className="py-4 pl-4">Instantâneo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4">8 caracteres, minúsculas e números</td>
                      <td className="py-4 px-4 font-mono">abc123xy</td>
                      <td className="py-4 px-4">Horas</td>
                      <td className="py-4 pl-4">Minutos</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4">10 caracteres, maiúsculas, minúsculas e números</td>
                      <td className="py-4 px-4 font-mono">Abc123Xy45</td>
                      <td className="py-4 px-4">Meses</td>
                      <td className="py-4 pl-4">Dias</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">12 caracteres, todos os tipos</td>
                      <td className="py-4 px-4 font-mono">A!b2C#d3E@f4</td>
                      <td className="py-4 px-4">Séculos</td>
                      <td className="py-4 pl-4">Anos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Nota: Estes tempos são estimativas aproximadas e podem variar dependendo de muitos fatores, 
                incluindo avanços tecnológicos e otimizações de algoritmos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default BruteForce;
