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
    <div className="bg-white border rounded-xl p-4 shadow-sm mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Buscar por nome, vaga ou skills
        </label>
        <input
          value={termo}
          onChange={(e) => onTermoChange(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm"
          placeholder="Ex: Java, Ana, Desenvolvedor Back-end..."
        />
      </div>

      <div className="flex gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            De
          </label>
          <input
            type="date"
            value={dataInicial}
            onChange={(e) => onDataInicialChange(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Até
          </label>
          <input
            type="date"
            value={dataFinal}
            onChange={(e) => onDataFinalChange(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
