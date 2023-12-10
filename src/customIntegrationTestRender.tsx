import { ReactElement } from 'react';
import { createServer } from 'miragejs';
import { RenderOptions, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Snackbar } from './components';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { baseURL } from './services';
import { allRoutes } from './App';

import { loansAvailable } from './__mocks__/loansData';

export function mirageServer() {
  return createServer({
    routes() {
      this.urlPrefix = baseURL;

      this.post('/offers', () => {
        return {
          apr: 0.05,
          id: 'anId',
          monthlyPayments: 8.56,
        };
      });

      this.post('/submissions', () => {
        return {
          userId: 'userId',
        };
      });

      this.get('/loans', () => {
        return {
          loansAvailable,
        };
      });
    },
  });
}

const queryClient = new QueryClient();
export let routerListener: ReturnType<typeof createMemoryRouter>;

function AllTheProviders({ initialRoute }: { initialRoute: string }) {
  routerListener = createMemoryRouter(allRoutes, {
    initialEntries: [initialRoute],
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerListener} />
      <Snackbar />
    </QueryClientProvider>
  );
}

export const customIntegrationTestRender = (
  ui: ReactElement,
  initialRoute = '/',
  options?: RenderOptions,
) =>
  render(ui, {
    wrapper: () => <AllTheProviders initialRoute={initialRoute} />,
    ...options,
  });

export * from '@testing-library/react';
