import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import AllRouting from './routes';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AllRouting />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'  />
      </QueryClientProvider>
    </>
  );
}

export default App;
