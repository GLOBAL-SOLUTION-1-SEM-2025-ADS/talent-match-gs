import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Auditor inteligente de currículos com IA
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          O TalentMatch IA analisa currículos em PDF, cruza com a descrição da vaga
          e gera pareceres objetivos para auxiliar recrutadores na tomada de decisão.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/vaga"
            className="px-5 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
          >
            Iniciar nova análise
          </Link>
          <Link
            to="/historico"
            className="px-5 py-3 rounded-lg bg-white border text-sm font-semibold text-gray-700 hover:bg-slate-50"
          >
            Ver histórico de pareceres
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h3 className="font-semibold mb-3 text-gray-800">
          Como funciona o fluxo
        </h3>
        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
          <li>Informe a descrição da vaga.</li>
          <li>Envie o currículo em PDF.</li>
          <li>Aguarde a análise automática da IA.</li>
          <li>Visualize o parecer detalhado e consulte históricos.</li>
        </ol>
      </div>
    </div>
  );
}
