import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Register from "./pages/register/Register.jsx"
import Success from "./pages/success/Success.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;