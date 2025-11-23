import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../components/Button";
import { schema, type FormData, type Props } from "../../types/sac.ts";

const Sac = ({ buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [messageSucessful, setMessageSucessful] = useState(false);

  async function enviarFormulario(data: FormData) {
    console.log("formulário enviado!", data);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setMessageSucessful(true);
    reset();

    setTimeout(() => {
      setMessageSucessful(false);
    }, 5000);
  }
  return (
    <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-5xl mx-auto bg-white border border-blue-100 shadow-2xl rounded-3xl overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition-colors">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white p-10 md:p-12 flex flex-col gap-6">
            <div className="inline-flex items-center px-4 py-2 text-sm font-semibold uppercase tracking-wide bg-white/15 border border-white/25 rounded-full">
              Atendimento
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Fale com a gente e receba um retorno rápido.
            </h2>
            <p className="text-white/80 text-lg">
              Estamos prontos para ajudar com dúvidas sobre a plataforma,
              integrações e parcerias. Responderemos em até 1 dia útil.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1.3fr] gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Suporte
                </p>
                <p className="text-sm font-semibold">suporte@talentmatch.com</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Parcerias
                </p>
                <p className="text-sm font-semibold">
                  parcerias@talentmatch.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/85 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
              Equipe online em horário comercial
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-6 bg-white dark:bg-gray-900 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-indigo-200 uppercase tracking-wide transition-colors">
                  Formulário
                </p>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-gray-50 transition-colors">
                  Envie sua mensagem
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">
                  Retornaremos assim que possível. Campos marcados são
                  obrigatórios.
                </p>
              </div>
              {messageSucessful && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 transition-colors">
                  Enviado
                </span>
              )}
            </div>

            <form
              onSubmit={handleSubmit(enviarFormulario)}
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="block font-semibold text-gray-800 dark:text-gray-100 transition-colors">
                  Nome
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full rounded-xl border p-3.5 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 transition ${
                    errors.name
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-200 dark:border-gray-700 focus:ring-indigo-200 dark:focus:ring-indigo-400"
                  }`}
                  placeholder="Como devemos te chamar?"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-gray-800 dark:text-gray-100 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full rounded-xl border p-3.5 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 transition ${
                    errors.email
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-200 dark:border-gray-700 focus:ring-indigo-200 dark:focus:ring-indigo-400"
                  }`}
                  placeholder="seuemail@empresa.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-gray-800 dark:text-gray-100 transition-colors">
                  Mensagem
                </label>
                <textarea
                  {...register("message")}
                  className={`w-full rounded-xl border p-3.5 min-h-[140px] bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 transition ${
                    errors.message
                      ? "border-red-400 focus:ring-red-200"
                      : "border-gray-200 dark:border-gray-700 focus:ring-indigo-200 dark:focus:ring-indigo-400"
                  }`}
                  placeholder="Conte como podemos ajudar"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => reset()}
                  className="px-5 py-2 rounded-lg"
                >
                  Limpar
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-lg text-white"
                >
                  {isSubmitting ? "Enviando..." : buttonText ?? "Enviar"}
                </Button>
              </div>
              {isSubmitting && !messageSucessful && (
                <p className="text-sm text-blue-700 dark:text-indigo-200 flex items-center gap-2 transition-colors">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  Status: enviando...
                </p>
              )}
              {messageSucessful && (
                <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-2 transition-colors">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Status: enviado com sucesso.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sac;
