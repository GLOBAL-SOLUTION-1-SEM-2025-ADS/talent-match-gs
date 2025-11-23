import LogoReact from "../../assets/logos/react-logo.svg";
import LogoTypeScript from "../../assets/logos/typescript-logo.svg";
import LogoTailwind from "../../assets/logos/tailwind-logo.svg";
import LogoPython from "../../assets/logos/python-logo.svg";
import LogoOpenAI from "../../assets/logos/openai-logo.svg";
import LogoJava from "../../assets/logos/java-logo.svg";
import LogoOracleSQL from "../../assets/logos/oracle-logo.svg";
import Mission from "../../assets/icons/mission-icon.svg";
import Innovation from "../../assets/icons/innovation.svg";

export default function About() {
  return (
    <div className="space-y-20">
      <section className="  mb-6 py-20 text-center">
        <h1 className="text-blue-800 text-5xl font-bold">Sobre Nós</h1>
        <p className=" text-gray-500 mt-8  text-xl max-w-2xl mx-auto">
          Somos uma plataforma de análise inteligente de currículos que combina
          inteligência artificial e experiência em RH para transformar a forma
          como empresas encontram e avaliam talentos.
        </p>
      </section>

      <section className="px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-blue-800">
          Nossos Valores
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 text-3xl">
              <img src={Mission} alt="missão" className="w-8 h-8"  />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900">
              Nossa Missão
            </h3>
            <p className="text-gray-700">
              Revolucionar o processo de recrutamento com tecnologia de ponta, tornando a seleção de talentos mais eficiente, justa e precisa.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 text-3xl">
              <img src={Innovation} alt="inovação" className="w-8 h-8"/>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900">
              Inovação
            </h3>
            <p className="text-gray-700">
              Utilizamos inteligência artificial de para automatizar e otimizar cada etapa da análise de currículos.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 text-3xl">
              <img src={Innovation} alt="inovação" className="w-8 h-8"/>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900">
              Inovação
            </h3>
            <p className="text-gray-700">
              Utilizamos inteligência artificial de para automatizar e otimizar cada etapa da análise de currículos.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 text-3xl">
              <img src={Innovation} alt="inovação" className="w-8 h-8"/>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900">
              Inovação
            </h3>
            <p className="text-gray-700">
              Utilizamos inteligência artificial de para automatizar e otimizar cada etapa da análise de currículos.
            </p>
          </div>

        </div>
      </section>

      <section className="px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tecnologias utilizadas
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src={LogoReact} alt="React" className="h-12" />
          <img src={LogoTypeScript} alt="TypeScript" className="h-12" />
          <img src={LogoTailwind} alt="Tailwind CSS" className="h-12" />
          <img src={LogoPython} alt="Python" className="h-12" />
          <img src={LogoOpenAI} alt="OpenAI" className="h-12" />
          <img src={LogoJava} alt="Java" className="h-16" />
          <img src={LogoOracleSQL} alt="OracleSQL" className="h-5" />
        </div>
      </section>

      <section className="bg-indigo-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Quer colaborar ou usar nossa API?
        </h2>
        <p className="mb-6">
          Confira nosso repositório no GitHub ou entre em contato conosco.
        </p>
        <a
          href="https://github.com/anafreitas-br/talent-match-ia"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100"
        >
          Ver no GitHub
        </a>
      </section>
    </div>
  );
}
