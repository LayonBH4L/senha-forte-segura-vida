
import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Força de Senha</h1>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Teste a Força da Sua Senha</h2>
          <p className="mb-6 text-gray-600">
            Digite uma senha abaixo para ver sua classificação de força. Este é apenas um exemplo educacional 
            e recomendamos não usar suas senhas reais.
          </p>
          
          <Input
            type="text"
            placeholder="Digite uma senha para testar..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          
          <PasswordStrengthMeter password={password} />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>O que faz uma senha forte?</CardTitle>
              <CardDescription>Características importantes para segurança</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Comprimento:</strong> Quanto mais longa a senha, mais segura ela é. Use pelo menos 12 caracteres.
                </li>
                <li>
                  <strong>Complexidade:</strong> Combine letras maiúsculas, minúsculas, números e símbolos.
                </li>
                <li>
                  <strong>Imprevisibilidade:</strong> Evite padrões óbvios ou informações pessoais fáceis de adivinhar.
                </li>
                <li>
                  <strong>Unicidade:</strong> Use senhas diferentes para cada serviço online.
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Senhas frágeis comuns</CardTitle>
              <CardDescription>O que evitar ao criar senhas</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Sequências simples:</strong> Como "123456" ou "abcdef".
                </li>
                <li>
                  <strong>Palavras do dicionário:</strong> Qualquer palavra real é fácil de quebrar.
                </li>
                <li>
                  <strong>Informações pessoais:</strong> Nome, data de nascimento, nome de animais de estimação.
                </li>
                <li>
                  <strong>Substituições óbvias:</strong> Como "P@ssw0rd" (trocando letras por símbolos de forma previsível).
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Como calcular a força de uma senha</h2>
          <p className="mb-4">
            A força de uma senha é geralmente calculada considerando:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Fatores de avaliação:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tamanho da senha (quanto maior, melhor)</li>
                <li>Presença de letras maiúsculas</li>
                <li>Presença de letras minúsculas</li>
                <li>Presença de números</li>
                <li>Presença de caracteres especiais</li>
                <li>Ausência de padrões repetitivos</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-lg">Exemplos:</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Senha: "senha123"</p>
                  <p className="text-red-500">Força: Muito fraca</p>
                  <p className="text-sm">Motivo: Curta e previsível</p>
                </div>
                <div>
                  <p className="font-medium">Senha: "P@ssw0rd!"</p>
                  <p className="text-yellow-500">Força: Média</p>
                  <p className="text-sm">Motivo: Substitições previsíveis de uma palavra comum</p>
                </div>
                <div>
                  <p className="font-medium">Senha: "j8K#p2%L9qR$7z"</p>
                  <p className="text-green-500">Força: Muito forte</p>
                  <p className="text-sm">Motivo: Longa, aleatória, com variedade de caracteres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ferramentas e técnicas para criar senhas fortes</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Método da frase-senha</h3>
            <p className="mb-2">
              Use uma frase inteira que você possa lembrar facilmente, e transforme-a em uma senha:
            </p>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p><strong>Frase:</strong> "Eu gosto de tomar café às 8h da manhã!"</p>
              <p><strong>Senha resultante:</strong> "EgdtcA8hdm!"</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Use gerenciadores de senhas</h3>
            <p>
              Gerenciadores de senhas podem gerar e armazenar senhas aleatórias e fortes para você, 
              eliminando a necessidade de memorizar todas elas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3">Autenticação de dois fatores (2FA)</h3>
            <p>
              Além de uma senha forte, ativar a autenticação de dois fatores adiciona uma camada extra 
              de segurança às suas contas, mesmo se a senha for comprometida.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PasswordStrength;
