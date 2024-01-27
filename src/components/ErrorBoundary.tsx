import { TSeverity, useSnackbarStore } from '@/stores';
import { Component, ErrorInfo, ReactNode } from 'react';
import { useRouteError } from 'react-router-dom';

interface Props {
  children?: ReactNode;
  routerError?: { message: string };
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
    const { setSnackbar, routerError } = this.props;
    if (this.state.hasError) {
      setSnackbar('error', 'Something went wrong');
      return <div>Something went wrong</div>;
    }
    if (routerError?.message) {
      setSnackbar('error', routerError.message);
      return <div>{routerError.message}</div>;
    }

    return this.props.children;
  }
}

export function ErrorBoundary({ children }: { children?: ReactNode }) {
  const { setSnackbar } = useSnackbarStore();
  const routerError = useRouteError();
  return (
    <ErrorBoundaryComponent
      routerError={routerError as Props['routerError']}
      setSnackbar={setSnackbar}
    >
      {children}
    </ErrorBoundaryComponent>
  );
}
