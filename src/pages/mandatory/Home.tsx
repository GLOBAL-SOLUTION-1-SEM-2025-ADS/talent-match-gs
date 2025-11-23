import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);
  const [ctaReady, setCtaReady] = useState(false);
  const [secondaryCtaReady, setSecondaryCtaReady] = useState(false);

  useEffect(() => {
    const heroTimer = setTimeout(() => setHeroReady(true), 120);
    const ctaTimer = setTimeout(() => setCtaReady(true), 280);
    const secondaryTimer = setTimeout(() => setSecondaryCtaReady(true), 380);
    return () => {
      clearTimeout(heroTimer);
      clearTimeout(ctaTimer);
      clearTimeout(secondaryTimer);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors">
      <section className="px-4 md:px-10 pt-16 pb-10">
        <div className="max-w-5xl mx-auto space-y-8 text-center lg:text-left">
          <div
            className={`space-y-6 transition duration-700 ease-out ${
              heroReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-white border border-blue-100 text-blue-800 dark:bg-gray-900 dark:border-gray-700 dark:text-indigo-200 rounded-full shadow-sm">
              IA TalentMatch
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-900 dark:text-gray-50 transition-colors">
              Auditor inteligente de currículos com IA confiável e transparente.
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0 transition-colors">
              Analise PDFs, compare com a vaga e receba pareceres claros sobre
              fit, gaps e recomendações. Decisões mais rápidas, baseadas em
              dados, com trilha de auditoria completa.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
              <div className="bg-white border border-blue-100 dark:bg-gray-900 dark:border-gray-700 rounded-2xl p-4 shadow-sm transition-colors">
                <p className="text-xs uppercase tracking-wide text-blue-700 dark:text-indigo-200">
                  Tempo
                </p>
                <p className="text-xl font-semibold text-blue-900 dark:text-gray-50 transition-colors">
                  -60% triagem
                </p>
              </div>
              <div className="bg-white border border-blue-100 dark:bg-gray-900 dark:border-gray-700 rounded-2xl p-4 shadow-sm transition-colors">
                <p className="text-xs uppercase tracking-wide text-blue-700 dark:text-indigo-200">
                  Transparência
                </p>
                <p className="text-xl font-semibold text-blue-900 dark:text-gray-50 transition-colors">
                  Critérios visíveis
                </p>
              </div>
              <div className="bg-white border border-blue-100 dark:bg-gray-900 dark:border-gray-700 rounded-2xl p-4 shadow-sm transition-colors">
                <p className="text-xs uppercase tracking-wide text-blue-700 dark:text-indigo-200">
                  Escala
                </p>
                <p className="text-xl font-semibold text-blue-900 dark:text-gray-50 transition-colors">+500k CVs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              to="/vaga"
              className={`px-6 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold shadow-md transition duration-600 ease-out ${
                ctaReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              Iniciar nova análise
            </Link>
            <Link
              to="/historico"
              className={`px-6 py-3 rounded-lg bg-white border border-blue-100 text-sm font-semibold text-blue-900 hover:bg-slate-50 shadow-sm transition duration-600 ease-out dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 ${
                secondaryCtaReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              Ver histórico de pareceres
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto bg-white border border-blue-100 rounded-3xl shadow-xl overflow-hidden dark:bg-gray-900 dark:border-gray-700 transition-colors">
          <div className="p-6 md:p-8 border-b border-blue-50 dark:border-gray-800 transition-colors">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide dark:text-indigo-200">
              Fluxo rápido
            </p>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-gray-50 transition-colors">Como funciona</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors">
              Quatro passos para receber pareceres e registrar todo o histórico
              de análise.
            </p>
          </div>
          <ol className="space-y-3 p-6 md:p-8 text-sm text-gray-800 dark:text-gray-200 transition-colors">
            <li className="flex gap-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold dark:bg-indigo-900/60 dark:text-indigo-200 transition-colors">
                1
              </span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-gray-50 transition-colors">Descreva a vaga</p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Cole o perfil ou requisitos principais.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold dark:bg-indigo-900/60 dark:text-indigo-200 transition-colors">
                2
              </span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-gray-50 transition-colors">Envie o PDF</p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Faça upload do currículo do candidato.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold dark:bg-indigo-900/60 dark:text-indigo-200 transition-colors">
                3
              </span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-gray-50 transition-colors">Receba o parecer</p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Fit, gaps e recomendações da IA.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold dark:bg-indigo-900/60 dark:text-indigo-200 transition-colors">
                4
              </span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-gray-50 transition-colors">
                  Consulte históricos
                </p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Tudo salvo para auditoria e comparações futuras.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
