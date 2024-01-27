import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary, Snackbar } from './components';

const queryClient = new QueryClient();
export const allRoutes = [
  {
    path: '/',
    element: <div>Home</div>,
    ErrorBoundary: () => <ErrorBoundary>{null}</ErrorBoundary>,
  },
];
const router = createBrowserRouter(allRoutes);

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Snackbar />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
