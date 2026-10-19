import React, { Component, ErrorInfo, ReactNode } from "react";
import { BARBERSHOP_DATA } from "../data/barbershop";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro capturado pela ErrorBoundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#111317] text-[#e2e2e8] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#5c4304]/40 border border-[#e9c176]/40 flex items-center justify-center text-[#e9c176] mb-6">
            <span className="material-symbols-outlined text-[32px]">warning</span>
          </div>

          <h1 className="font-['Outfit'] text-2xl sm:text-3xl font-semibold mb-3">
            Ocorreu um imprevisto ao carregar a página
          </h1>

          <p className="font-['Inter'] text-[#9a8f80] max-w-md mb-8 text-sm sm:text-base leading-relaxed">
            Estamos prontos para atender você. Recarregue a página ou fale diretamente com a equipe da Barbearia Brutus pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 h-12 rounded-lg bg-[#282a2e] border border-[#4e4639] text-[#e2e2e8] hover:text-[#e9c176] font-['Outfit'] text-sm font-medium transition-colors"
            >
              Recarregar página
            </button>

            <a
              href={BARBERSHOP_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 h-12 rounded-lg bg-[#e9c176] text-[#412d00] font-['Outfit'] text-sm font-semibold flex items-center gap-2 hover:bg-[#e8c178] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
