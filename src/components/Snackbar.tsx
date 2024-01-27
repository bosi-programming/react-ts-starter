import { useEffect } from 'react';
import { useSnackbarStore } from '@/stores';
import { Paragraph } from './Paragraph';

export function Snackbar() {
  const { severity, message, open, handleClose } = useSnackbarStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [open, handleClose]);

  if (!message || !severity || !open) return null;

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  }[severity];

  return (
    <div
      data-testid="snackbar"
      className="absolute dark:bg-green bottom-4 left-4 rounded"
    >
      <div className={`w-full mb-2 h-2 rounded-t ${bgColor}`} />
      <Paragraph className="p-6 pr-3 inline-flex">
        {severity}: {message ?? 'Test message'}
        <div className="pl-4" onClick={handleClose}>
          X
        </div>
      </Paragraph>
    </div>
  );
}
