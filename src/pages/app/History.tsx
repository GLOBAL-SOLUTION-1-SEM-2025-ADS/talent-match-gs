import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { AnaliseComMeta } from "../../types";
import { carregarHistorico } from "../../utils/storage";
import LoadingStatus from "../../components/LoadingStatus";
import AnalysisCard from "../../components/AnalysisCard";
import FilterBar from "../../components/Filterbar";

export default function Historico() {
  const [lista, setLista] = useState<AnaliseComMeta[]>([]);
  const [status, setStatus] = useState<string | null>("Carregando histórico...");
  const [termo, setTermo] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  useEffect(() => {
    const registros = carregarHistorico();
    setLista(registros);
    setStatus(null);
  }, []);

  const filtrados = lista.filter((item) => {
    const data = new Date(item.data);

    if (dataInicial) {
      const di = new Date(dataInicial);
      if (data < di) return false;
    }
    if (dataFinal) {
      const df = new Date(dataFinal);
      df.setHours(23, 59, 59, 999);
      if (data > df) return false;
    }

    if (!termo.trim()) return true;

    const base = (
      item.analise.nome +
      " " +
      item.vaga +
      " " +
      item.analise.pontos_fortes +
      " " +
      item.analise.pontos_a_melhora_riscos +
      " " +
      item.analise.resumo_final
    ).toLowerCase();

    return base.includes(termo.toLowerCase());
  });

  if (status) {
    return (
      <section
        className="px-4 md:px-10 py-16 
        bg-gradient-to-br from-blue-50 via-white to-indigo-50 
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black
        min-h-[70vh] flex items-center"
      >
        <div className="max-w-xl mx-auto w-full">
          <LoadingStatus mensagem={status} />
        </div>
      </section>
    );
  }

  return (
    <section
      className="px-4 md:px-10 py-16 
      bg-gradient-to-br from-blue-50 via-white to-indigo-50 
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black
      min-h-[90vh]"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Título + Voltar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start gap-3">
            <Link
              to="/vaga"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full 
                border border-blue-100 dark:border-gray-700 
                bg-white dark:bg-gray-900 
                text-blue-800 dark:text-gray-100 
                shadow-sm hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              aria-label="Voltar para vaga"
            >
              ←
            </Link>

            <div className="space-y-2">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide 
                bg-white dark:bg-gray-900 
                border border-blue-100 dark:border-gray-700 
                text-blue-800 dark:text-indigo-300 
                rounded-full shadow-sm"
              >
                Histórico
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-gray-100">
                Pareceres anteriores
              </h1>

              <p className="text-gray-700 dark:text-gray-300">
                Consulte e filtre análises já realizadas. Use termo de busca ou intervalo de datas.
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            Total de análises:{" "}
            <span className="font-semibold text-blue-900 dark:text-indigo-300">
              {lista.length}
            </span>
          </div>
        </div>

        {/* Filtro */}
        <div
          className="bg-white dark:bg-gray-900 
          border border-blue-100 dark:border-gray-700 
          rounded-3xl shadow-lg p-4 md:p-6"
        >
          <FilterBar
            termo={termo}
            onTermoChange={setTermo}
            dataInicial={dataInicial}
            dataFinal={dataFinal}
            onDataInicialChange={setDataInicial}
            onDataFinalChange={setDataFinal}
          />
        </div>

        {/* Lista */}
        {filtrados.length === 0 ? (
          <div
            className="bg-white dark:bg-gray-900 
            border border-blue-100 dark:border-gray-700 
            rounded-2xl shadow-md p-6 text-sm text-gray-600 dark:text-gray-300"
          >
            Nenhum parecer encontrado com os filtros atuais.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filtrados.map((item) => (
              <AnalysisCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
