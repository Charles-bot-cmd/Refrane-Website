import { Link } from 'react-router-dom';
import { Button } from '@/components/atoms';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center container-padding">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-charcoal mb-4">Page Not Found</h2>
        <p className="text-mist mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}