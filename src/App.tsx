import { ThemeProvider } from "./components/theme-provider"
import {createBrowserRouter, RouterProvider}  from "react-router-dom"
import { routes } from "./config/routes"

const router = createBrowserRouter(routes)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
