import { TSeverity, useSnackbarStore } from '@/stores';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  setSnackbar: (severity: TSeverity, message: string) => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundaryComponent extends Component<Props, State> {
  public state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { setSnackbar } = this.props;
    if (this.state.hasError) {
      setSnackbar('error', 'Something went wrong');
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}

export function ErrorBoundary({ children }: { children?: ReactNode }) {
  const { setSnackbar } = useSnackbarStore();
  return (
    <ErrorBoundaryComponent setSnackbar={setSnackbar}>
      {children}
    </ErrorBoundaryComponent>
  );
}
