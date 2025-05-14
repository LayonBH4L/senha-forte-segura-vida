
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldCheck } from 'lucide-react';

const PasswordSecurity = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Segurança com Senhas</h1>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Por que a segurança de senhas é importante?</h2>
          <p className="mb-4 text-gray-700">
            As senhas são frequentemente a primeira e, às vezes, a única linha de defesa para nossas 
            contas e informações pessoais online. Um invasor que obtém acesso a uma de suas contas 
            pode roubar informações pessoais, acessar seus dados financeiros ou até mesmo usar 
            seu perfil para enganar outras pessoas.
          </p>
          <p className="text-gray-700">
            Boas práticas de segurança de senhas são essenciais no mundo digital de hoje, 
            onde temos dezenas ou centenas de contas online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Vulnerabilidades comuns</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✕</span>
                  <span><strong>Reutilização de senhas</strong> - Usar a mesma senha em múltiplos sites</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✕</span>
                  <span><strong>Senhas fracas</strong> - Muito curtas ou fáceis de adivinhar</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✕</span>
                  <span><strong>Armazenamento inseguro</strong> - Escrever em papéis ou arquivos não criptografados</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✕</span>
                  <span><strong>Compartilhamento</strong> - Informar suas senhas para outras pessoas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✕</span>
                  <span><strong>Não atualizar</strong> - Manter a mesma senha por anos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Melhores práticas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Senhas únicas</strong> - Use uma senha diferente para cada serviço</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Gerenciador de senhas</strong> - Use um software seguro para armazenar suas senhas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Autenticação de 2 fatores</strong> - Adicione uma camada extra de proteção</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Senhas longas</strong> - Use frases-senha de pelo menos 12 caracteres</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Mudança regular</strong> - Especialmente para contas críticas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="max-w-4xl mx-auto mb-12 border-l-4 border-l-blue-500">
          <ShieldCheck className="h-5 w-5 text-blue-500" />
          <AlertTitle>Dica de segurança</AlertTitle>
          <AlertDescription>
            Verificar se suas senhas foram comprometidas em vazamentos de dados é uma prática recomendada. 
            Existem serviços online legítimos que permitem verificar isso de forma segura.
          </AlertDescription>
        </Alert>
        
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6">Perguntas frequentes sobre segurança de senhas</h2>
          
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">O que é um gerenciador de senhas e por que devo usar um?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p>
                  Um gerenciador de senhas é um software que armazena todas as suas senhas de forma segura e criptografada. 
                  Você só precisa lembrar de uma senha mestra para acessar todas as outras. As vantagens incluem:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>Geração de senhas fortes e aleatórias</li>
                  <li>Armazenamento seguro de senhas diferentes para cada site</li>
                  <li>Preenchimento automático de formulários de login</li>
                  <li>Sincronização entre dispositivos</li>
                  <li>Alertas de vazamentos de dados</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">Como funciona a autenticação de dois fatores (2FA)?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p>
                  A autenticação de dois fatores adiciona uma camada extra de segurança exigindo dois tipos diferentes 
                  de identificação antes de permitir o acesso a uma conta:
                </p>
                <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-700">
                  <li>Algo que você <strong>sabe</strong>: sua senha</li>
                  <li>Algo que você <strong>tem</strong>: como seu celular (para receber SMS ou gerar códigos)</li>
                  <li>Ou algo que você <strong>é</strong>: como sua impressão digital</li>
                </ol>
                <p className="mt-2">
                  Mesmo que alguém descubra sua senha, sem o segundo fator (como seu telefone), 
                  não conseguirá acessar sua conta.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">Com que frequência devo mudar minhas senhas?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p>
                  As recomendações modernas de segurança mudaram nos últimos anos:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>
                    <strong>Contas importantes</strong>: Mude a cada 3-6 meses (email, contas bancárias, etc.)
                  </li>
                  <li>
                    <strong>Outras contas</strong>: Não é necessário mudar regularmente se você usa senhas fortes e únicas
                  </li>
                  <li>
                    <strong>SEMPRE mude imediatamente</strong> se:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Houver notícia de vazamento de dados em um serviço que você usa</li>
                      <li>Você suspeitar que alguém possa conhecer sua senha</li>
                      <li>Você compartilhou sua senha com alguém e não quer mais que ela tenha acesso</li>
                    </ul>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">É seguro salvar senhas no navegador?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p>
                  O armazenamento de senhas nos navegadores melhorou muito nos últimos anos, mas ainda 
                  tem algumas limitações:
                </p>
                <p className="mt-2 font-medium">Prós:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-700">
                  <li>Conveniente e fácil de usar</li>
                  <li>Sincronização entre dispositivos (com uma conta no navegador)</li>
                  <li>Criptografia geralmente de boa qualidade</li>
                </ul>
                
                <p className="mt-2 font-medium">Contras:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-700">
                  <li>Se alguém tiver acesso ao seu dispositivo desbloqueado, pode acessar todas as suas senhas</li>
                  <li>Funcionalidades limitadas comparadas a gerenciadores de senhas dedicados</li>
                  <li>Geralmente vinculado a um único ecossistema de navegador</li>
                </ul>
                
                <p className="mt-2">
                  <strong>Conclusão</strong>: É melhor que usar a mesma senha em todo lugar, mas um gerenciador 
                  de senhas dedicado ainda oferece mais segurança e funcionalidades.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Passos para proteger suas senhas hoje</h2>
          
          <ol className="space-y-6">
            <li className="flex">
              <div className="bg-[#0a192f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-medium mb-1">Avalie suas senhas atuais</h3>
                <p className="text-gray-700">
                  Faça uma auditoria e identifique senhas fracas, duplicadas ou antigas que precisam ser atualizadas.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="bg-[#0a192f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-medium mb-1">Configure um gerenciador de senhas</h3>
                <p className="text-gray-700">
                  Escolha um gerenciador de senhas confiável e comece a migrar suas senhas para ele.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="bg-[#0a192f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-medium mb-1">Crie novas senhas fortes</h3>
                <p className="text-gray-700">
                  Atualize suas senhas antigas ou fracas para senhas longas e aleatórias geradas pelo gerenciador.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="bg-[#0a192f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-medium mb-1">Ative a autenticação de dois fatores</h3>
                <p className="text-gray-700">
                  Comece pelas suas contas mais importantes: email, bancos, redes sociais, armazenamento em nuvem.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="bg-[#0a192f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</div>
              <div>
                <h3 className="text-lg font-medium mb-1">Crie um plano de recuperação</h3>
                <p className="text-gray-700">
                  Certifique-se de salvar códigos de backup e configurar métodos alternativos de recuperação para suas contas importantes.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </MainLayout>
  );
};

export default PasswordSecurity;
