import React, { Component, ErrorInfo, ReactNode } from "react";
import { log } from "../utils/logger";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    log.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-red-50 text-red-900 border border-red-200 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Une erreur inattendue s'est produite</h2>
          <p className="text-sm">Veuillez rafraîchir la page ou réessayer plus tard.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
