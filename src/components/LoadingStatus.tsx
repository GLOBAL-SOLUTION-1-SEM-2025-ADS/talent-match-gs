interface Props {
  mensagem: string;
}

export default function LoadingStatus({ mensagem }: Props) {
  return (
    <div className="mt-6 flex items-center gap-3 text-sm text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3">
      <span className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      <span>{mensagem}</span>
    </div>
  );
}