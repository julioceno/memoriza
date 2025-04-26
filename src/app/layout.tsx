import { Raleway } from "next/font/google";
import { ToastProvider } from "@/context/toast/toast";

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Memoriza",
  description: "Estude rápido. Lembre sempre!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={raleway.variable}>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
