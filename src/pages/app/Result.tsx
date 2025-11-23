import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { AnaliseComMeta } from "../../types";
import { buscarAnalisePorId } from "../../utils/storage";
import LoadingStatus from "../../components/LoadingStatus";

export default function Resultado() {
  const { id } = useParams();
  const [registro, setRegistro] = useState<AnaliseComMeta | null>(null);
  const [status, setStatus] = useState<string | null>("Carregando parecer...");

  useEffect(() => {
    if (!id) return;
    const found = buscarAnalisePorId(id);
    setRegistro(found || null);
    setStatus(null);
  }, [id]);

  if (!id) {
    return (
      <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[70vh] flex items-center">
        <div className="max-w-xl mx-auto space-y-4 bg-white border border-red-100 rounded-2xl shadow-md p-6">
          <p className="text-sm text-red-700">ID de análise não informado.</p>
          <Link
            to="/historico"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow-sm"
          >
            ← Voltar ao histórico
          </Link>
        </div>
      </section>
    );
  }

  if (status) {
    return (
      <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[70vh] flex items-center">
        <div className="max-w-xl mx-auto w-full">
          <LoadingStatus mensagem={status} />
        </div>
      </section>
    );
  }

  if (!registro) {
    return (
      <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[70vh] flex items-center">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
            Não foi possível encontrar a análise solicitada no histórico local.
          </p>
          <Link
            to="/historico"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow-sm"
          >
            ← Voltar ao histórico
          </Link>
        </div>
      </section>
    );
  }

  const { analise, vaga, data } = registro;
  const dataFormatada = new Date(data).toLocaleString("pt-BR");

  return (
    <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[90vh]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-white border border-blue-100 text-blue-800 rounded-full shadow-sm">
              Parecer da IA
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
              Resultado da análise
            </h1>
            <p className="text-sm text-gray-600">Gerado em {dataFormatada}</p>
          </div>
          <div className="flex items-center gap-3 bg-white border border-blue-100 rounded-2xl shadow-md px-5 py-3">
            <div className="text-right">
              <p className="text-xs text-gray-500">Score</p>
              <p
                className={`text-3xl font-extrabold ${
                  analise.score_percent >= 80
                    ? "text-emerald-600"
                    : analise.score_percent >= 60
                    ? "text-amber-600"
                    : "text-rose-600"
                }`}
              >
                {analise.score_percent}%
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {analise.nivel_compatibilidade}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 space-y-5">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-semibold text-blue-900">
                  Candidato:
                </span>
                <span className="text-base text-gray-900">
                  {analise.nome || "Nome não identificado no currículo"}
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-blue-900">
                  Vaga analisada
                </h2>
                <p className="text-sm text-gray-800 whitespace-pre-wrap bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                  {vaga}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                  <h3 className="text-sm font-semibold text-emerald-800">
                    Pontos fortes
                  </h3>
                  <p className="text-sm text-emerald-900 whitespace-pre-wrap mt-2">
                    {analise.pontos_fortes}
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                  <h3 className="text-sm font-semibold text-amber-800">
                    Pontos a melhorar / riscos
                  </h3>
                  <p className="text-sm text-amber-900 whitespace-pre-wrap mt-2">
                    {analise.pontos_a_melhora_riscos}
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-indigo-800">
                  Recomendação
                </h3>
                <p className="text-sm text-indigo-900 whitespace-pre-wrap mt-2">
                  {analise.recomendacao}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-slate-800">
                  Resumo final
                </h3>
                <p className="text-sm text-slate-900 whitespace-pre-wrap mt-2">
                  {analise.resumo_final}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6">
              <p className="text-sm font-semibold text-blue-900">
                Próximos passos
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Compartilhe o parecer com o time.</li>
                <li>• Ajuste a vaga e refaça a análise se necessário.</li>
                <li>• Salve no histórico para auditorias futuras.</li>
              </ul>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 space-y-3">
              <p className="text-sm font-semibold text-blue-900">
                Ações rápidas
              </p>
              <Link
                to="/vaga"
                className="block w-full text-center px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                Fazer nova análise
              </Link>
              <Link
                to="/historico"
                className="block w-full text-center px-4 py-2.5 bg-white border border-blue-100 text-sm font-semibold text-blue-900 rounded-xl shadow-sm hover:bg-slate-50 transition"
              >
                Voltar ao histórico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
