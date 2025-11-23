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
      ? "bg-emerald-100 text-emerald-800"
      : analise.score_percent >= 60
      ? "bg-amber-100 text-amber-800"
      : "bg-rose-100 text-rose-800";

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:bg-slate-50 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">{dataFormatada}</p>
          <h3 className="font-semibold text-gray-800 mt-1">
            {analise.nome || "Candidato sem nome detectado"}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            Vaga: {item.vaga || "Não informada"}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${corScore}`}>
            {analise.score_percent}% • {analise.nivel_compatibilidade}
          </span>
          <Link
            to={`/analise/${item.id}`}
            className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Abrir análise
          </Link>
        </div>
      </div>
    </div>
  );
}
