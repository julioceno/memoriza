import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-10/12 items-center justify-center flex-col gap-7">
      <h3 className="text-4xl w-5/12 font-bold text-center text-white">
        Bem-vindo ao Memoriza. Estude rápido. Lembre sempre!
      </h3>
      <button className="relative flex items-center justify-center w-full max-w-xs px-6 py-3 bg-white text-gray-700 font-medium rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-gray-100 cursor-pointer">
        <ArrowRight className="absolute left-4 w-5 h-5" strokeWidth={3} />
        <span className="mx-auto font-bold">Vamos começar</span>
      </button>
    </div>
  );
}