import React from "react";
import { ArrowLeft } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface PrivacyPolicyProps {
  onBack: () => void;
  isDark: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack, isDark }) => {
  return (
    <div className="bg-sky-50 dark:bg-sky-950 min-h-screen text-midnight-950 dark:text-champagne-100 font-sans transition-colors duration-700">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          {/* BrandLogo centralizado */}
          <div className="flex justify-center mb-8">
            <BrandLogo scrolled={true} />
          </div>
          
          {/* Botão voltar */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-champagne-600 dark:text-champagne-400 hover:text-champagne-700 dark:hover:text-champagne-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Voltar</span>
          </button>
          
          <h1 className="font-display text-5xl md:text-6xl mb-4 text-midnight-900 dark:text-champagne-100">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                1. Introdução
              </h2>
              <p>
                Esta Política de Privacidade descreve como Lays Sonego ("nós", "nosso" ou "empresa") 
                coleta, usa e protege suas informações pessoais quando você utiliza nosso site. 
                Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais 
                de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                2. Informações que Coletamos
              </h2>
              <p className="mb-4">
                Nosso site é principalmente informativo e não coleta dados pessoais diretamente 
                através de formulários. No entanto, podemos coletar as seguintes informações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Informações de navegação:</strong> Quando você acessa nosso site, 
                  podemos coletar informações técnicas como endereço IP, tipo de navegador, 
                  páginas visitadas e tempo de permanência.
                </li>
                <li>
                  <strong>Informações de contato:</strong> Quando você utiliza os links para 
                  WhatsApp ou Instagram, essas plataformas podem coletar informações conforme 
                  suas próprias políticas de privacidade.
                </li>
                <li>
                  <strong>Cookies:</strong> Utilizamos cookies técnicos necessários para o 
                  funcionamento do site, como preferências de tema (modo claro/escuro).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                3. Como Utilizamos suas Informações
              </h2>
              <p className="mb-4">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Melhorar a experiência de navegação no site</li>
                <li>Manter suas preferências de visualização (tema claro/escuro)</li>
                <li>Analisar o uso do site para melhorias técnicas</li>
                <li>Responder a solicitações de contato através das plataformas de comunicação</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                4. Compartilhamento de Informações
              </h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para o funcionamento do site (como provedores de serviços 
                de hospedagem) ou quando exigido por lei. Quando você utiliza os links para WhatsApp 
                ou Instagram, essas plataformas operam sob suas próprias políticas de privacidade.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                5. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição. 
                No entanto, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                6. Seus Direitos (LGPD)
              </h2>
              <p className="mb-4">De acordo com a LGPD, você tem os seguintes direitos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Confirmação e acesso:</strong> Solicitar confirmação sobre o tratamento de seus dados</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar a remoção de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados</li>
                <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                <li><strong>Informação sobre compartilhamento:</strong> Obter informações sobre entidades públicas e privadas com as quais compartilhamos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                7. Cookies
              </h2>
              <p>
                Utilizamos apenas cookies técnicos essenciais para o funcionamento do site, como 
                a preferência de tema. Esses cookies não coletam informações pessoais identificáveis 
                e são necessários para a experiência básica do usuário.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                8. Links para Sites de Terceiros
              </h2>
              <p>
                Nosso site contém links para WhatsApp e Instagram. Não somos responsáveis pelas 
                práticas de privacidade dessas plataformas. Recomendamos que você leia as políticas 
                de privacidade de cada serviço que utilizar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                9. Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. A data da última 
                atualização será sempre indicada no topo desta página. Recomendamos que você revise 
                esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                10. Contato
              </h2>
              <p className="mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                entre em contato conosco através de:
              </p>
              <div className="bg-champagne-50 dark:bg-midnight-800 p-6 rounded-sm border-l-4 border-champagne-500">
                <p className="mb-2">
                  <strong>Lays Sonego</strong>
                </p>
                <p className="mb-2">
                  Av. Alexandrina Bertoldi Vercellino, 722<br />
                  Bairro Vila Ginasial<br />
                  Boituva/SP
                </p>
                <p>
                  <strong>WhatsApp:</strong> +55 15 99610-8172<br />
                  <strong>Instagram:</strong> @lays.sonego
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-midnight-950/10 dark:border-white/10">
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
            Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

