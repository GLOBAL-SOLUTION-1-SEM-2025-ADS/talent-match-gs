import { Link } from "react-router-dom";
import type { AnaliseComMeta } from "../types";

interface Props {
  item: AnaliseComMeta;
}

export default function AnalysisCard({ item }: Props) {
  const { analise } = item;
  const dataFormatada = new Date(item.data).toLocaleString("pt-BR");

  const corScore =
    analise.score_percent >= 80
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100"
      : analise.score_percent >= 60
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-100"
      : "bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-100";

  return (
    <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs text-gray-500 dark:text-gray-400">{dataFormatada}</p>
          <h3 className="font-semibold text-blue-900 dark:text-gray-50 transition-colors">
            {analise.nome || "Candidato sem nome detectado"}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 transition-colors">
            Vaga: {item.vaga || "Não informada"}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${corScore}`}
          >
            {analise.score_percent}% • {analise.nivel_compatibilidade}
          </span>
          <Link
            to={`/analise/${item.id}`}
            className="text-xs px-3 py-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Abrir análise
          </Link>
        </div>
      </div>
    </div>
  );
}
