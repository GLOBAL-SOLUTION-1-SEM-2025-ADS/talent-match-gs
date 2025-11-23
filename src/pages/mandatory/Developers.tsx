import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedIn.png";
import ana from "../../assets/ana.png";
import gui from "../../assets/gui.jpeg";

const Developers = () => {
  const integrantes = [
    {
      nome: "Ana Flavia de Freitas",
      funcao: "Estudante de Analise e Desenvolvimento de Sistemas",
      rm: "565559",
      turma: "1TDSPK",
      linkedin: "https://www.linkedin.com/in/ana-fl%C3%A1via-de-freitas/",
      github: "https://github.com/anafreitas-br",
      foto: ana,
    },
    {
      nome: "Luis Guilherme Borges Silva",
      funcao: "Estudante de Analise e Desenvolvimento de Sistemas",
      rm: "566548",
      turma: "1TDSPK",
      linkedin: "https://www.linkedin.com/in/luis130505/",
      github: "https://github.com/LuisGdev13",
      foto: gui,
    },
  ];
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-900 dark:text-gray-100 transition-colors">
      <h2 className="text-3xl font-extrabold text-center text-blue-800 dark:text-indigo-200 mb-10">
        Desenvolvedores
      </h2>
      <p className="text-xl  text-center text-gray-500 dark:text-gray-300 mb-10 transition-colors">
        Conheça a equipe por trás do{" "}
        <span className="font-bold">TalentMatch</span>, sua plataforma de
        análise de currículos inteligente
      </p>

      <section className="grid gap-8">
        {integrantes.map((dev, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition dark:bg-gray-900 dark:border-gray-700"
          >
            <img
              src={dev.foto}
              alt={`Foto de ${dev.nome}`}
              className="w-28 h-28 rounded-full border-2 border-gray-300 dark:border-gray-700 object-cover"
            />

            <article className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 transition-colors">
                {dev.nome}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 transition-colors">{dev.funcao}</p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                <strong>RM:</strong> {dev.rm} | <strong>Turma:</strong>{" "}
                {dev.turma}
              </p>

              <div className="flex justify-center sm:justify-start gap-4 mt-4">
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-indigo-300 dark:hover:text-indigo-200 transition"
                >
                  <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-gray-50 transition"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Developers;
