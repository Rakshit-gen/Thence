import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Register from "./pages/register/Register"
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <FAQ />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      )
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;