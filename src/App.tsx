import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Login, SignUp } from "./pages"
import { Toaster } from "react-hot-toast"
import { MainContainer, PrivateRoute, PublicRoute } from "./components"
import { useCheckAuth } from "./features/auth/authHookes"

function App() {
  const { isLoading } = useCheckAuth();

  if (isLoading) return (
    <MainContainer className="w-full h-full">
      <h1>Loading...</h1>
    </MainContainer>
  );

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element="<h1>Page not found</h1>" /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App 
