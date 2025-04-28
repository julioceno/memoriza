import Header from "@/components/Header";
import { Raleway } from "next/font/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 ">
      <div className="min-h-screen pt-4 px-4 sm:px-12 max-w-[1800px] mx-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
