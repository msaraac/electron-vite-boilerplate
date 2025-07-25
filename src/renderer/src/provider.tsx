import type { NavigateOptions } from 'react-router-dom'

import { HeroUIProvider } from '@heroui/react'
import { useHref, useNavigate } from 'react-router-dom'

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function Provider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  )
}
