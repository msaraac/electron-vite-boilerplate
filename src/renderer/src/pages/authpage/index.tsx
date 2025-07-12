import { useBoundStore } from '@renderer/store'
import { useEffect } from 'react'
import { Button } from '@heroui/button'

function AuthPage(): React.JSX.Element {
  const { isAuthenticated, setAuthenticated } = useBoundStore()

  useEffect(() => {
    // This effect runs once when the component mounts
    console.log('AuthPage mounted, isAuthenticated:', isAuthenticated)

    // You can also perform any side effects here, like fetching user data
    return () => {
      // This cleanup function runs when the component unmounts
      console.log('AuthPage unmounted')
    }
  }, [isAuthenticated])

  return (
    <>
      <h1>Auth Page</h1>
      <p>{isAuthenticated ? 'You are authenticated' : 'You are not authenticated'}</p>
      <Button onPress={() => setAuthenticated(!isAuthenticated)}>Test</Button>
    </>
  )
}

export default AuthPage
