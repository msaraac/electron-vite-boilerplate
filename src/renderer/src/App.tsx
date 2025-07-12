import { Route, Routes } from 'react-router-dom'
import MainPage from '@renderer/pages/mainpage'
import AuthPage from '@renderer/pages/authpage'

function App(): React.JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/main-page" />
        <Route element={<AuthPage />} path="/" />
      </Routes>
    </>
  )
}

export default App
