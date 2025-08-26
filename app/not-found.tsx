import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center container-padding">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="text-6xl font-bold text-gradient mb-4">404</div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/" className="inline-flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Need help? <Link href="#contact" className="text-primary hover:underline">Contact us</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}