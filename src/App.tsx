import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Login, SignUp } from "./pages"
import { Toaster } from "react-hot-toast"
import { useCheckAuth } from "./features/auth/authHookes"
import { MessageContainer, NoChatSelected, PrivateRoute, PublicRoute, Loader, MainContainer } from "./components"
import useSocket from "./socket"

function App() {
  const { isLoading } = useCheckAuth();   
  useSocket();


  if (isLoading) return (
    <MainContainer>
      <Loader />
    </MainContainer>
  );

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} >
            <Route index element={<NoChatSelected />} />

            <Route path="/send/:id" element={<MessageContainer />} />
            <Route path="/send-message/:id" element={<MessageContainer />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App 
