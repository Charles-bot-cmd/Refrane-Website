'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const Fallback = this.props.fallback
        return <Fallback error={this.state.error} resetError={this.resetError} />
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
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
          {error && process.env.NODE_ENV === 'development' && (
            <details className="text-left">
              <summary className="text-sm font-medium mb-2 cursor-pointer">
                Error Details (Development)
              </summary>
              <pre className="text-xs bg-muted p-2 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
          <div className="flex gap-2 justify-center">
            <Button onClick={resetError} variant="outline">
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()}>
              Reload Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}