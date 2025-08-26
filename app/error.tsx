'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center container-padding">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-xl">Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We apologize for the inconvenience. An unexpected error occurred.
          </p>
          
          {process.env.NODE_ENV === 'development' && error.message && (
            <details className="text-left">
              <summary className="text-sm font-medium mb-2 cursor-pointer text-muted-foreground">
                Error Details (Development)
              </summary>
              <pre className="text-xs bg-muted p-2 rounded overflow-auto text-left">
                {error.message}
              </pre>
            </details>
          )}
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button onClick={reset} variant="outline">
              Try Again
            </Button>
            <Button onClick={() => window.location.href = '/'}>
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}