import React from "react";
import { ArrowLeft } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface TermsOfUseProps {
  onBack: () => void;
  isDark: boolean;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack, isDark }) => {
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
            Termos de Uso
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
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos 
                seguintes Termos de Uso. Se você não concorda com qualquer parte destes termos, 
                não deve utilizar este site. Estes termos se aplicam a todos os visitantes, 
                usuários e outras pessoas que acessam ou utilizam o site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                2. Descrição do Serviço
              </h2>
              <p>
                Este site é um catálogo digital de serviços de estética e bem-estar oferecidos 
                por Lays Sonego. O site apresenta informações sobre tratamentos faciais, corporais, 
                terapias holísticas e pacotes especiais. O site serve como uma ferramenta informativa 
                e de contato, direcionando os usuários para canais de comunicação externos (WhatsApp 
                e Instagram) para agendamentos e consultas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                3. Uso do Site
              </h2>
              <p className="mb-4">Você concorda em utilizar este site apenas para fins legais e de forma que:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não viole qualquer lei ou regulamento aplicável</li>
                <li>Não infrinja os direitos de propriedade intelectual de terceiros</li>
                <li>Não transmita qualquer conteúdo malicioso, vírus ou código prejudicial</li>
                <li>Não tente obter acesso não autorizado a qualquer parte do site</li>
                <li>Não utilize o site de forma que possa danificar, desabilitar ou sobrecarregar o site</li>
                <li>Não utilize robôs, scripts ou métodos automatizados para acessar o site</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                4. Propriedade Intelectual
              </h2>
              <p className="mb-4">
                Todo o conteúdo deste site, incluindo mas não limitado a textos, gráficos, logotipos, 
                ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de 
                propriedade de Lays Sonego ou de seus fornecedores de conteúdo e está protegido por 
                leis de direitos autorais brasileiras e internacionais.
              </p>
              <p>
                Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir 
                publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir 
                qualquer material do nosso site sem nossa permissão prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                5. Precisão das Informações
              </h2>
              <p>
                Fazeremos o melhor esforço para garantir que as informações apresentadas no site sejam 
                precisas e atualizadas. No entanto, não garantimos a precisão, completude ou atualidade 
                de todas as informações. Preços, disponibilidade de serviços e outras informações podem 
                ser alteradas sem aviso prévio. Recomendamos que você confirme todas as informações 
                diretamente através dos canais oficiais de contato antes de realizar qualquer agendamento.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                6. Links para Sites de Terceiros
              </h2>
              <p>
                Nosso site contém links para sites de terceiros (WhatsApp e Instagram). Esses links 
                são fornecidos apenas para sua conveniência. Não temos controle sobre o conteúdo desses 
                sites e não assumimos responsabilidade por eles. O acesso a esses sites é por sua conta 
                e risco, e você deve revisar os termos de uso e políticas de privacidade desses sites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                7. Limitação de Responsabilidade
              </h2>
              <p className="mb-4">
                Na máxima extensão permitida por lei, Lays Sonego não será responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar o site</li>
                <li>Interrupções, erros, omissões ou defeitos no site</li>
                <li>Vírus ou outros componentes prejudiciais transmitidos através do site</li>
                <li>Perda de dados ou informações</li>
                <li>Qualquer perda ou dano resultante do uso de informações obtidas através do site</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                8. Agendamentos e Serviços
              </h2>
              <p>
                O site serve apenas como catálogo informativo. Todos os agendamentos e contratos de 
                serviços são realizados diretamente através dos canais oficiais de contato (WhatsApp 
                ou Instagram). Os termos e condições específicos de cada serviço serão acordados 
                diretamente entre você e Lays Sonego no momento do agendamento. As informações de 
                preços e disponibilidade no site são meramente informativas e podem estar sujeitas 
                a alterações.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                9. Modificações dos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                Alterações significativas serão comunicadas através de uma atualização da data 
                de "Última atualização" no topo desta página. É sua responsabilidade revisar 
                periodicamente estes termos. O uso continuado do site após qualquer modificação 
                constitui sua aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                10. Lei Aplicável
              </h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes 
                do estado de São Paulo, Brasil.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                11. Disposições Gerais
              </h2>
              <p className="mb-4">
                Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, 
                as disposições restantes permanecerão em pleno vigor e efeito. Estes termos constituem 
                o acordo completo entre você e Lays Sonego em relação ao uso do site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-4 text-midnight-900 dark:text-champagne-100">
                12. Contato
              </h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através de:
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
            Ao utilizar este site, você concorda com estes Termos de Uso
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

