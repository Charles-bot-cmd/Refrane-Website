import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './router/AppRouter';
import { checkSupabaseConnection } from '@/services';
import { useEffect } from 'react';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1
    }
  }
});

function App() {
  useEffect(() => {
    // Check Supabase connection on app start
    const checkConnection = async () => {
      const isConnected = await checkSupabaseConnection();
      console.log('🔌 Supabase connection:', isConnected ? 'Connected' : 'Disconnected');
    };
    
    checkConnection();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white">
          <AppRouter />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;