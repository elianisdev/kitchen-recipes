import { toast } from 'react-toastify';

export const handleToastError = (error: unknown, defaultMessage: string) => {
  const message = error instanceof Error ? error.message : defaultMessage;
  toast(`Error: ${message}`, { type: 'error', autoClose: 3000 });
};

export const handleToastSuccess = (message: string) => {
  toast(message, { type: 'success', autoClose: 500 });
};
