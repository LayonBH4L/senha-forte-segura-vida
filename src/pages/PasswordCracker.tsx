
import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PasswordCrackSimulator from '../components/PasswordCrackSimulator';
import { Key } from 'lucide-react';
import { toast } from 'sonner';

const PasswordCracker = () => {
  const [password, setPassword] = useState('');
  const [showSimulation, setShowSimulation] = useState(false);
  const [passwordType, setPasswordType] = useState<'custom' | 'example'>('example');
  const [examplePassword, setExamplePassword] = useState('senha123');

  const handleStartSimulation = () => {
    const targetPassword = passwordType === 'custom' ? password : examplePassword;
    
    if (targetPassword.length < 4) {
      toast.error('A senha precisa ter pelo menos 4 caracteres para a simulação');
      return;
    }
    
    setShowSimulation(true);
    
    if (passwordType === 'custom' && password.length > 0) {
      toast.warning('Lembre-se que este é apenas um simulador educacional! Nunca use suas senhas reais.');
    }
  };
  
  const handleSimulationComplete = () => {
    toast.success('Simulação concluída!');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Demonstração Educativa de Quebra de Senha</h1>
        
        <div className="max-w-4xl mx-auto">
          <Alert className="mb-8 bg-yellow-50 text-yellow-800 border border-yellow-200">
            <Key className="h-5 w-5" />
            <AlertDescription>
              Este simulador tem <strong>apenas fins educacionais</strong>. Ele demonstra visualmente como senhas 
              diferentes podem ser vulneráveis a ataques. Nunca insira senhas reais que você utiliza.
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Configurar Demonstração</CardTitle>
                <CardDescription>
                  Escolha uma senha para a simulação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="example" onValueChange={(value) => setPasswordType(value as 'custom' | 'example')}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="example">Usar exemplo</TabsTrigger>
                    <TabsTrigger value="custom">Personalizar</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="example" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Selecione uma senha de exemplo:</label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={examplePassword}
                        onChange={(e) => setExamplePassword(e.target.value)}
                      >
                        <option value="senha123">senha123</option>
                        <option value="admin">admin</option>
                        <option value="qwerty">qwerty</option>
                        <option value="abc123">abc123</option>
                        <option value="p@ssw0rd">p@ssw0rd</option>
                      </select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="custom" className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">Digite uma senha para testar:</label>
                      <Input
                        id="password"
                        type="text"
                        placeholder="Digite uma senha (não use senhas reais)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-xs text-gray-500">
                        Use uma senha fictícia para fins de demonstração. <strong>Nunca</strong> insira suas senhas reais.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  onClick={handleStartSimulation}
                  className="w-full mt-4"
                >
                  Iniciar Demonstração
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Como funciona</CardTitle>
                <CardDescription>
                  Entenda o que esta demonstração simula
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Este simulador mostra visualmente como um ataque de força bruta tentaria descobrir 
                  uma senha tentando diferentes combinações de caracteres.
                </p>
                
                <p>
                  Em um cenário real, estes ataques podem ser:
                </p>
                
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Muito mais lentos para senhas complexas</li>
                  <li>Bloqueados por sistemas de proteção como CAPTCHA</li>
                  <li>Impossibilitados por autenticação de dois fatores</li>
                  <li>Dificultados pelo bloqueio após múltiplas tentativas falhas</li>
                </ul>
                
                <p className="text-sm text-gray-500 italic">
                  Para fins de demonstração, este simulador executa a "quebra" muito mais rapidamente 
                  do que seria possível em um sistema real e protegido.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {showSimulation && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Simulação em Andamento</h2>
              <PasswordCrackSimulator 
                targetPassword={passwordType === 'custom' ? password : examplePassword} 
                onComplete={handleSimulationComplete}
              />
            </div>
          )}
          
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle>Fatores que afetam o tempo de quebra de uma senha</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium">Comprimento da senha</h3>
                    <p className="text-gray-600">
                      Cada caractere adicional multiplica exponencialmente o número de combinações possíveis.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium">Complexidade de caracteres</h3>
                    <p className="text-gray-600">
                      Usando maiúsculas, minúsculas, números e símbolos, você aumenta drasticamente o número de possibilidades.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium">Previsibilidade</h3>
                    <p className="text-gray-600">
                      Senhas baseadas em palavras comuns ou padrões de teclado são testadas primeiro em ataques inteligentes.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-medium">Poder computacional do atacante</h3>
                    <p className="text-gray-600">
                      Hardware mais potente pode testar muito mais combinações por segundo, reduzindo o tempo necessário.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-medium">Medidas de segurança do site/serviço</h3>
                    <p className="text-gray-600">
                      Limites de tentativas, atrasos entre tentativas e outros sistemas de proteção podem tornar ataques de força bruta inviáveis.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default PasswordCracker;
