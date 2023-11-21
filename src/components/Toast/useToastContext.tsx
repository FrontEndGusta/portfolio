// ToastContext.tsx
import { createContext, ReactNode, useContext } from 'react';
import Toast from '.';
import useToast from './useToast';

type ToastContextType = {
  ToastComponent: JSX.Element | null;
  createToast: {
    success: (text: string) => void;
    error: (text: string) => void;
  };
  
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const toast = useToast();

  return <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
