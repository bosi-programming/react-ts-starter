import { Alert, Snackbar as MUISnackbar } from '@mui/material';
import { useSnackbarStore } from '@/stores';

export function Snackbar() {
  const { severity, message, open, handleClose } = useSnackbarStore();

  if (!message || !severity) return null;

  return (
    <MUISnackbar
      data-testid="snackbar"
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MUISnackbar>
  );
}
