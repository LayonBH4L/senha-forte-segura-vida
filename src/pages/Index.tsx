
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MainLayout from '../layout/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <section className="py-20 bg-gradient-to-b from-[#0a192f] to-[#112240] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Aprenda Sobre <span className="text-[#64ffda]">Segurança de Senhas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Entenda como funcionam os ataques de quebra de senha e como proteger suas contas online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-[#64ffda] hover:bg-[#4ce3c2] text-[#0a192f] font-medium text-lg px-8 py-6">
                <Link to="/password-cracker">Experimentar Simulador</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#64ffda] text-[#64ffda] hover:bg-[#112240] font-medium text-lg px-8 py-6">
                <Link to="/password-strength">Aprenda Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Tópicos Educacionais
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Key className="text-blue-600 w-8 h-8" />
                </div>
                <CardTitle>Força de Senha</CardTitle>
                <CardDescription>
                  Como criar e avaliar senhas fortes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Aprenda sobre os componentes que fazem uma senha forte e como evitar senhas fáceis de quebrar.
                </p>
                <Button asChild variant="outline">
                  <Link to="/password-strength">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-50 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Shield className="text-red-600 w-8 h-8" />
                </div>
                <CardTitle>Ataques de Força Bruta</CardTitle>
                <CardDescription>
                  Como funcionam os ataques de quebra de senha
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Entenda os métodos utilizados por atacantes para descobrir senhas e como eles funcionam.
                </p>
                <Button asChild variant="outline">
                  <Link to="/brute-force">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-50 flex items-center justify-center rounded-full mx-auto mb-4">
                  <ShieldCheck className="text-green-600 w-8 h-8" />
                </div>
                <CardTitle>Segurança de Senhas</CardTitle>
                <CardDescription>
                  Melhores práticas para proteger suas contas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Dicas e técnicas para gerenciar suas senhas de forma segura e evitar que sejam comprometidas.
                </p>
                <Button asChild variant="outline">
                  <Link to="/password-security">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Simulador Educacional
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experimente nosso simulador que demonstra como diferentes tipos de senhas
            podem ser quebradas e quanto tempo levaria para um ataque ter sucesso.
          </p>
          <Button asChild className="bg-[#0a192f] hover:bg-[#112240] text-white font-medium">
            <Link to="/password-cracker">Ver Demonstração</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
