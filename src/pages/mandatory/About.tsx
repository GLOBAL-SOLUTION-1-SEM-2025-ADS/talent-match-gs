import LogoReact from "../../assets/logos/react-logo.svg";
import LogoTypeScript from "../../assets/logos/typescript-logo.svg";
import LogoTailwind from "../../assets/logos/tailwind-logo.svg";
import LogoPython from "../../assets/logos/python-logo.svg";
import LogoOpenAI from "../../assets/logos/openai-logo.svg";
import LogoJava from "../../assets/logos/java-logo.svg";
import LogoOracleSQL from "../../assets/logos/oracle-logo.svg";
import Mission from "../../assets/icons/mission-icon.svg";
import Innovation from "../../assets/icons/innovation.svg";
import Trust from "../../assets/icons/trust-icon.svg";
import Impact from "../../assets/icons/impact-icon.svg";

export default function About() {
  return (
    <div className="space-y-20">
      <section className="  mb-6 py-20 text-center">
        <h1 className="text-blue-800 text-5xl font-bold">Sobre Nós</h1>
        <p className=" text-gray-500 mt-8  text-xl max-w-2xl mx-auto">
          Somos uma plataforma de análise inteligente de currículos que combina
          inteligência artificial e experiência em RH para transformar a forma
          como empresas encontram e avaliam talentos.
        </p>
      </section>

      <section className="px-4 md:px-20">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-600 text-white shadow-2xl">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="grid md:grid-cols-5 gap-0 relative">
            <div className="md:col-span-3 p-10 md:p-14 space-y-6">
              <span className="inline-flex items-center px-4 py-2 text-sm font-semibold uppercase tracking-wide bg-white/15 border border-white/25 rounded-full">
                Nossa História
              </span>
              <h2 className="text-4xl font-bold leading-tight">
                De um desafio de recrutamento a uma plataforma guiada por IA.
              </h2>
              <p className="text-white/80 text-lg">
                Nascemos da necessidade de tornar o processo de recrutamento
                mais eficiente e menos suscetível a vieses. Profissionais de RH
                gastavam horas em pilhas de currículos e, muitas vezes, talentos
                incríveis passavam despercebidos.
              </p>
              <p className="text-white/80 text-lg">
                Com a evolução da inteligência artificial e do processamento de
                linguagem natural, criamos uma solução que acelera a triagem,
                torna as avaliações mais justas e baseia decisões em dados
                objetivos.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/10 border border-white/25 rounded-2xl p-4">
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Empresas atendidas
                  </p>
                  <p className="text-2xl font-semibold">+120</p>
                </div>
                <div className="bg-white/10 border border-white/25 rounded-2xl p-4">
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Currículos analisados
                  </p>
                  <p className="text-2xl font-semibold">+500k</p>
                </div>
                <div className="bg-white/10 border border-white/25 rounded-2xl p-4">
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Tempo médio economizado
                  </p>
                  <p className="text-2xl font-semibold">-60%</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white/10 border-t md:border-t-0 md:border-l border-white/20 p-10 md:p-14 space-y-6">
              <h3 className="text-2xl font-semibold">Nossa essência</h3>
              <p className="text-white/80">
                Cada decisão de produto parte de um princípio simples: reduzir ruído
                e aumentar clareza para recrutadores e candidatos. Nada de telas
                complexas ou processos opacos.
              </p>
              <div className="space-y-4 text-white/90">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  <p className="font-medium">Avaliações transparentes com critérios visíveis.</p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                  <p className="font-medium">IA que explica o “porquê” de cada recomendação.</p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                  <p className="font-medium">Fluxos enxutos para equipes enxutas.</p>
                </div>
              </div>
              <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  O que nos guia
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Entregar tempo de volta para quem contrata e oportunidades para quem busca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-blue-800">
          Nossos Valores
        </h2>

        <div className="max-w-6xl mx-auto rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-lg">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 p-8 md:p-12">
            <div className="h-full rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all p-7 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center text-2xl">
                <img src={Mission} alt="missão" className="w-8 h-8"  />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                Nossa Missão
              </h3>
              <p className="text-gray-700 flex-1 leading-relaxed">
                Revolucionar o recrutamento com tecnologia de ponta, tornando a seleção
                de talentos mais eficiente, justa e precisa.
              </p>
            </div>

            <div className="h-full rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all p-7 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center text-2xl">
                <img src={Innovation} alt="inovação" className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                Inovação
              </h3>
              <p className="text-gray-700 flex-1 leading-relaxed">
                IA aplicada com propósito: automatizar a triagem e explicar cada recomendação de forma clara.
              </p>
            </div>

            <div className="h-full rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all p-7 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center text-2xl">
                <img src={Trust} alt="confiança" className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                Confiança
              </h3>
              <p className="text-gray-700 flex-1 leading-relaxed">
                Segurança de dados como padrão: privacidade, compliance e transparência em cada entrega.
              </p>
            </div>

            <div className="h-full rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all p-7 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center text-2xl">
                <img src={Impact} alt="impacto" className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                Impacto
              </h3>
              <p className="text-gray-700 flex-1 leading-relaxed">
                Resultados mensuráveis: menos tempo na triagem e contratações mais alinhadas ao perfil ideal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tecnologias utilizadas
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src={LogoReact} alt="React" className="h-12" />
          <img src={LogoTypeScript} alt="TypeScript" className="h-12" />
          <img src={LogoTailwind} alt="Tailwind CSS" className="h-12" />
          <img src={LogoPython} alt="Python" className="h-12" />
          <img src={LogoOpenAI} alt="OpenAI" className="h-12" />
          <img src={LogoJava} alt="Java" className="h-16" />
          <img src={LogoOracleSQL} alt="OracleSQL" className="h-5" />
        </div>
      </section>

      <section className="bg-indigo-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Quer colaborar ou usar nossa API?
        </h2>
        <p className="mb-6">
          Confira nosso repositório no GitHub ou entre em contato conosco.
        </p>
        <a
          href="https://github.com/anafreitas-br/talent-match-ia"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100"
        >
          Ver no GitHub
        </a>
      </section>
    </div>
  );
}
