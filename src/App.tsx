import { Button, Card, CardContent, CardHeader, Input, Label, Badge, Spinner } from '@/components/ui'

function App() {
  return (
    <div className="min-h-screen bg-light-gray p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-light text-deep-charcoal">
          Loving Your Skin Platform
        </h1>
        
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-medium text-deep-charcoal">Design System Test</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-3">Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="primary" isLoading>Loading</Button>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 className="text-lg font-medium mb-3">Form Elements</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <Label htmlFor="email" required>Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="error-input">Input with Error</Label>
                  <Input 
                    id="error-input" 
                    error 
                    errorMessage="This field is required" 
                    placeholder="Error state"
                  />
                </div>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-lg font-medium mb-3">Badges</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            {/* Loading States */}
            <div>
              <h3 className="text-lg font-medium mb-3">Loading States</h3>
              <div className="flex gap-4 items-center">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App