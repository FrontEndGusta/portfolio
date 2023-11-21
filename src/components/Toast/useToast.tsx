// useToast.tsx
import React, { useState } from 'react';
import Toast from '.';
import { ToastContainer } from './styles';

type ToastType = {
  text: string;
  variant?: 'success' | 'error';
};

export default function useToast() {
  const [list, setToasts] = useState<ToastType[]>([]);

  const createToast = (text: string, variant: 'success' | 'error' ): void => {
    const newToast: ToastType = { text, variant };
    setToasts([...list, newToast]);

    setTimeout(() => {
      setToasts((toasts) => toasts.slice(1));
    }, 5000);
  };

  const ToastComponent = (
    <ToastContainer>
      <div className="toasts">
        {list.map((t, index) => (
          <Toast key={index} variant={t.variant}>
            {t.text}
          </Toast>
        ))}
      </div>
    </ToastContainer>
  );

  return {
    ToastComponent,
    createToast: {
      success: (text: string) => createToast(text, 'success'),
      error: (text: string) => createToast(text, 'error'),
    },
  };
}
