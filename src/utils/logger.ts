/**
 * Logger sécurisé (SHIELD PRO)
 * N'affiche les messages que dans l'environnement de développement.
 */
export const log = {
  dev: (...args: any[]) => {
    if (import.meta.env.DEV) {
      console.log("[DEV]", ...args);
    }
  },
  warn: (...args: any[]) => {
    if (import.meta.env.DEV) {
      console.warn("[WARN]", ...args);
    }
  },
  error: (...args: any[]) => {
    if (import.meta.env.DEV) {
      console.error("[ERROR]", ...args);
    }
  }
};
