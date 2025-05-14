
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          Este site foi desenvolvido apenas para fins educativos sobre segurança de senhas.
        </p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} SecurePassEdu - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
