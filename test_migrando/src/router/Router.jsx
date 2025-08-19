import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../page/BoasVindas";
import ProductForm from "../ProductForm";
import Carrinho from "../page/Carrinho";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BoasVindas />
  },
    {
    path: "/cadastro-produto",
    element: <ProductForm />
  },
  {
    path: "/carrinho",
    element: <Carrinho />
  }
]);

export default router;