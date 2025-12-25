"use client";

import * as React from "react";

type Toast = {
  title?: string;
  description?: string;
};

const ToastContext = React.createContext<
  ((toast: Toast) => void) | undefined
>(undefined);

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toast, setToast] = React.useState<Toast | null>(null);

  return (
    <ToastContext.Provider value={setToast}>
      {children}

      {toast && (
        <div className="fixed top-4 right-4 z-50 rounded-md border bg-card p-4 shadow-lg animate-fade-in">
          {toast.title && (
            <div className="font-semibold">{toast.title}</div>
          )}
          {toast.description && (
            <div className="text-sm text-muted-foreground">
              {toast.description}
            </div>
          )}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return {
    toast: context,
  };
}
