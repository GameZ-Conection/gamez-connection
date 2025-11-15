
import { ProgressBar } from "@/components/ProgressBar";
import { UserCard } from "@/components/UserCard";
import AnimatedProgress from "@/components/AnimatedProgress";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <section className="report-container bg-white shadow-lg rounded-2xl grid md:grid-cols-2 gap-10 p-10 max-w-5xl w-full">
        <div className="report-content flex flex-col justify-center">
          <h2 className="report-title text-xl font-bold text-gray-800 mb-6">Relatório Final</h2>

          <div className="progress-section mb-8">
            <ProgressBar label="Moral" value={20} />
            <ProgressBar label="Recursos" value={80} />
            <AnimatedProgress label="Tempo" step={5} intervalMs={700} starting={0} />
          </div>

          <div className="report-text space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              No fim da partida, ficou claro que sua estratégia foi pautada pela eficiência. Cada ação foi otimizada,
              o tempo gasto foi surpreendentemente baixo e os resultados imediatos mostraram sua habilidade em organizar
              e executar com precisão.
            </p>
            <p>
              Você terminou como um líder pragmático e veloz, mas talvez seja hora de equilibrar a eficiência com o
              cuidado ao espírito coletivo.
            </p>
          </div>
        </div>

        <div className="user-card-wrapper flex justify-center items-start">
          <UserCard dias={90} />
        </div>
      </section>
    </main>
  );
}
