import { StateCreator, create } from 'zustand';

export type TSeverity = 'success' | 'info' | 'warning' | 'error' | null;

export interface ISnackbarStore {
  severity: TSeverity;
  message: string | null;
  open: boolean;
  setSnackbar: (severity: TSeverity, message: string) => void;
  handleClose: () => void;
}

export const snackbarStoreCreator: StateCreator<ISnackbarStore> = (set) => ({
  severity: null,
  message: null,
  open: false,
  setSnackbar: (severity, message) => set({ severity, message, open: true }),
  handleClose: () => set({ open: false }),
});

export const useSnackbarStore = create(snackbarStoreCreator);
