interface Props {
  termo: string;
  onTermoChange: (valor: string) => void;
  dataInicial: string;
  dataFinal: string;
  onDataInicialChange: (valor: string) => void;
  onDataFinalChange: (valor: string) => void;
}

export default function FilterBar({
  termo,
  onTermoChange,
  dataInicial,
  dataFinal,
  onDataInicialChange,
  onDataFinalChange,
}: Props) {
  return (
    <div className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-xl p-4 shadow-sm mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between transition-colors">
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 transition-colors">
          Buscar por nome, vaga ou skills
        </label>
        <input
          value={termo}
          onChange={(e) => onTermoChange(e.target.value)}
          className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition"
          placeholder="Ex: Java, Ana, Desenvolvedor Back-end..."
        />
      </div>

      <div className="flex gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 transition-colors">
            De
          </label>
          <input
            type="date"
            value={dataInicial}
            onChange={(e) => onDataInicialChange(e.target.value)}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1 transition-colors">
            Até
          </label>
          <input
            type="date"
            value={dataFinal}
            onChange={(e) => onDataFinalChange(e.target.value)}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400 transition"
          />
        </div>
      </div>
    </div>
  );
}
